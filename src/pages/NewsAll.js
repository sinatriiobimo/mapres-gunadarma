import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import NewsPage from 'parts/NewsPage'
import News from 'json/news.json';
import landingPage from 'json/landingPage.json';

export default class NewsAll extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Berita";
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <NewsPage data={News.news}></NewsPage>
                <Footer></Footer>
            </>
        )
    }
}

