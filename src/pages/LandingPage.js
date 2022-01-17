import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Faculty from 'parts/Faculty';
import News from 'parts/News';
import Testimonials from 'parts/Testimonials';
import Email from 'parts/Email';
import Footer from 'parts/Footer';
import { fetchPage } from 'store/actions/page';
class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refPrestasi = React.createRef();
    }

    componentDidMount() {
        window.title = "Mapres UG | Beranda";
        window.scrollTo(0, 0);

        if(!this.props.page.landingPage)
        this.props.fetchPage(`${process.env.REACT_APP_HOST}/api/v1/user/landing-page`, "landingPage")
    }
    
    render() {
        const {page} = this.props;
        if(!page.hasOwnProperty("landingPage")) return null;

        return (
            <div style={{background: "linear-gradient(#7A00B6, #120632)", zIndex: -99999, height: 617, width: '100%'}}>
                <Header {...this.props}></Header>
                <Hero refPrestasi={this.refPrestasi} data={page.landingPage.hero}/>
                <News data={page.landingPage.news}/>
                <Faculty refPrestasi={this.refPrestasi} data={page.landingPage.faculty}/>
                <Testimonials data={page.landingPage.testimonial}/>
                <Email/>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
})

export default connect(mapStateToProps, { fetchPage })(LandingPage);