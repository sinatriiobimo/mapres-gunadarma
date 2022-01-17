import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import FacultyBanner from 'parts/FacultyBanner';
import FacultyContent from 'parts/FacultyContent';
import FacultyAchieve from 'parts/FacultyAchieve';
import FacultyMajor from 'parts/FacultyMajor';
import { connect } from 'react-redux';
import { fetchPage } from 'store/actions/page';
class FacultyPage extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Fakultas";
        window.scrollTo(0, 0);

        if(!this.props.page[this.props.match.params.id])
        this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/user/detail-faculty/${this.props.match.params.id}`,
        this.props.match.params.id
        );
    }

    render() {
        const {page, match} = this.props;
        console.log(page)
        if(!page[match.params.id]) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <FacultyBanner 
                data={page[match.params.id]}></FacultyBanner>
                <FacultyContent data={page[match.params.id]}></FacultyContent>
                <FacultyMajor data={page[match.params.id]}></FacultyMajor>
                <FacultyAchieve data={page[match.params.id]}></FacultyAchieve>
                <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, {fetchPage})(FacultyPage)