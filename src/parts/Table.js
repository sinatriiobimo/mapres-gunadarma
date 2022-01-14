import React from 'react'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';

function Table({}) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios('https://jsonplaceholder.typicode.com/comments').then((res) => {
            setData(res.data);
        });
    };

    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;

    const columns = [
        {
            dataField: "email",
            text: "Email",
            sort: true,
        },{
            dataField: 'postId',
            text: 'Product ID',
            sort: true
        },{
            dataField: 'name',
            text: 'Name',
            sort: true
        }
    ]

    const MyExportCSV = (props) => {
        const handleClick = () => {
          props.onExport();
        };
        return (
          <div>
            <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
          </div>
        );
      };

    const pagination = paginationFactory({
        page: 2,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
          console.log('page', page);
          console.log('sizePerPage', sizePerPage);
        }
      });

    return (
        <section className="container mx-auto row align-items-center">
            <div style={{marginTop: '5rem', width: '85%'}} className="mx-auto">
            <Fade left>
                <div style={{width: '95%', marginBottom: '3rem'}}>
                    <h6 style={{marginBottom: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                        Table{" "}
                        <span style={{color: '#E8B9FF'}}>Prestasi</span>
                    </h6>
                    <p style={{lineHeight: '1.7rem'}}>
                        Daftar prestasi akademik dan non-akademik selama 5 tahun terakhir
                    </p>
                </div>  
            </Fade>
                <Fade delay={500}>
                <div>
                    <ToolkitProvider
                    keyField="id"
                    data={ data }
                    columns={ columns }
                    search
                    exportCSV
                    >{
                        props => (
                            <div>
                                <MyExportCSV {...props.csvProps}/>
                                <hr />
                                <SearchBar { ...props.searchProps } style={{width: '485%'}} />
                                <hr />
                                <BootstrapTable
                                headerClasses='header-table'
                                rowStyle={{color: 'white', float: 'none'}}
                                striped
                                hover
                                condensed
                                {...props.baseProps}
                                pagination={pagination}
                                />
                            </div>
                        )
                    }
                    </ToolkitProvider>
                </div>
                </Fade>
            </div>
        </section>
    )
}

export default Table
