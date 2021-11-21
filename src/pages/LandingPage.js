import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{background: "linear-gradient(#7A00B6, #120632)", zIndex: -99999}}>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}/>
            </div>
        )
    }
}