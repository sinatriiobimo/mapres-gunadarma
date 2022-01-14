import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Table from 'parts/Table'

export default class TablePage extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Table Prestasi";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Table></Table>
                <Footer></Footer>
            </>
        )
    }
}

