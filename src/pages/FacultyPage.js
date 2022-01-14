import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import FacultyBanner from 'parts/FacultyBanner';
import FacultyContent from 'parts/FacultyContent';
import FacultyAchieve from 'parts/FacultyAchieve';
import FacultyMajor from 'parts/FacultyMajor';
import FacultyDetails from 'json/facultyDetails.json';

export default class FacultyPage extends Component{
    
    componentDidMount() {
        window.title = "Mapres UG | Faculty Page";
        window.scrollTo(0, 0);
    }

    render() {
        const breadcrumb = [
            {pageTitle: "Beranda", pageHref: ""},
            {pageTitle: "Detail Fakultas", pageHref: ""}
        ];

        return (
            <>
                <Header {...this.props}></Header>
                <FacultyBanner 
                breadcrumb={breadcrumb} 
                data={FacultyDetails}></FacultyBanner>
                <FacultyContent data={FacultyDetails}></FacultyContent>
                <FacultyMajor data={FacultyDetails}></FacultyMajor>
                <FacultyAchieve data={FacultyDetails}></FacultyAchieve>
                <Footer></Footer>
            </>
        )
    }
}

