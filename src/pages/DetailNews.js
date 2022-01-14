import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import DetailNewsPage from 'parts/DetailNews';
import DetailNews from 'json/detailNews.json';

export default class FacultyPage extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Detail Berita";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <DetailNewsPage data={DetailNews}>
                </DetailNewsPage>
                <Footer></Footer>
            </>
        )
    }
}

