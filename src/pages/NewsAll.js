import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import NewsPage from 'parts/NewsPage'
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';
class NewsAll extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Berita";
        window.scrollTo(0, 0);
        
        if(!this.props.page.news)
        this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/user/news`, "news")
    }

    render() {
        const {page} = this.props;
        console.log(page);
        if(!page.hasOwnProperty("news")) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <NewsPage data={page.news.news}></NewsPage>
                <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, {fetchPage})(NewsAll);