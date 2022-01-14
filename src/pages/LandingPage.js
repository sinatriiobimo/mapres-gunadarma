import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Faculty from 'parts/Faculty';
import News from 'parts/News';
import Testimonials from 'parts/Testimonials';
import Email from 'parts/Email';
import Footer from 'parts/Footer';
import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refPrestasi = React.createRef();
    }

    componentDidMount() {
        window.title = "Mapres UG | Beranda";
        window.scrollTo(0, 0);

        // if(!this.props.page.landingPage)
        // this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/member/landing-page`, "landingPage")
    }

    render() {
        return (
            <div style={{background: "linear-gradient(#7A00B6, #120632)", zIndex: -99999, height: 617, width: '100%'}}>
                <Header {...this.props}></Header>
                <Hero refPrestasi={this.refPrestasi} data={landingPage.hero}/>
                <News data={landingPage.news}/>
                <Faculty refPrestasi={this.refPrestasi} data={landingPage.faculty}/>
                <Testimonials data={landingPage.testimonial}/>
                <Email/>
                <Footer/>
            </div>
        )
    }
}