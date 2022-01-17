import React from 'react'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import moment from 'moment';

function Table({tables}) {
    const [data, setData] = useState([tables]);

    const { SearchBar } = Search;
    const { ExportCSVButton } = CSVExport;

    const realData = data[0];

    const columns = [
        {
            dataField: "event",
            text: "Event",
            sort: true,
        },{
            dataField: 'participant',
            text: 'Status',
            sort: true
        },{
            dataField: 'rank',
            text: 'Peringkat',
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
            <div style={{marginTop: '5rem', width: '115%'}} className="mx-auto">
            <Fade left>
                <div style={{width: '105%', marginBottom: '3rem'}}>
                    <h6 style={{marginBottom: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                        Table{" "}
                        <span style={{color: '#E8B9FF'}}>Prestasi</span>
                    </h6>
                    <p style={{lineHeight: '1.7rem'}}>
                        Daftar prestasi akademik dan non-akademik selama 5 tahun terakhir
                    </p>
                    <hr />
                    <table style={{color: 'white'}} class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama Mahasiswa</th>
                            <th scope="col">NPM</th>
                            <th scope="col">Peringkat</th>
                            <th scope="col">Event</th>
                            <th scope="col">Karya</th>
                            <th scope="col">Status</th>
                            <th scope="col">Skala</th>
                            <th scope="col">Tgl Mulai</th>
                            <th scope="col">Tgl Akhir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {realData.map((item, index) => 
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{item.studentId.name}</td>
                            <td>{item.studentId.npm}</td>
                            <td>{item.rank}</td>
                            <td>{item.event}</td>
                            <td>{item.creation}</td>
                            <td>{item.participant}</td>
                            <td>{item.scale}</td>
                            <td>{moment(item.startDate).format("ll")}</td>
                            <td>{moment(item.startDate).format("ll")}</td>
                        </tr>
                        )}
                    </tbody>
                    </table>
                </div>  
                </Fade>
            </div>
        </section>
    )
}

export default Table
