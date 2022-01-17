import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import DetailNewsPage from 'parts/DetailNews';
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';
class DetailNews extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Detail Berita";
        window.scrollTo(0, 0);

        if(!this.props.page[this.props.match.params.id])
        this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/user/detail-news/${this.props.match.params.id}`,
        this.props.match.params.id
        );
    }

    render() {
        const {page, match} = this.props;
        if(!page[match.params.id]) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <DetailNewsPage data={page[match.params.id]}></DetailNewsPage>
                <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, {fetchPage})(DetailNews)