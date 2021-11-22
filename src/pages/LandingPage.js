import React, { Component } from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Faculty from 'parts/Faculty';
import News from 'parts/News';
import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <div style={{background: "linear-gradient(#7A00B6, #120632)", zIndex: -99999, height: 617, width: '100%'}}>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero}/>
                <News data={landingPage.news}/>
                <Faculty data={landingPage.faculty}/>
            </div>
        )
    }
}