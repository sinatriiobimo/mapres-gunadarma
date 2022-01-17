import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import TableAc from 'parts/TableAc';
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';

class TableAcademic extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Table Prestasi";
        window.scrollTo(0, 0);

        if(!this.props.page[this.props.match.params.id])
        this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/user/academic/${this.props.match.params.id}`,
        this.props.match.params.id
        );
    }

    render() {
        const {page, match} = this.props;
        if(!page[match.params.id]) return null;

        const contents = page[match.params.id].achievement.map(content => content)

        return (
            <>
                <Header {...this.props}></Header>
                <TableAc tables={contents}></TableAc>
                <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, {fetchPage})(TableAcademic)