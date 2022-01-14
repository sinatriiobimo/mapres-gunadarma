import React from 'react';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from 'react-html-parser';

export default function DetailNews({data}) {
    return (
        <section className="container mx-auto row align-items-center">
            <div style={{marginTop: '7rem', width: '65%'}} className="mx-auto">
                <Fade bottom delay={500}>
                    <h4 style={{color: '#CC96F0', fontWeight: 'bold', marginBottom: '2rem'}}>{data.news.topic.toUpperCase()}</h4>
                    <h3 style={{lineHeight: '2.8rem'}}>{data.news.headline}</h3>
                </Fade>

                <Fade delay={500}>
                <div style={{marginTop: '3rem'}} className="mx-auto container-sm rounded">
                    <img className="image-news" src={data.news.image} alt={data.news.headline} />
                </div>
                </Fade>

                <Fade delay={500}>
                    <h6 style={{marginTop: '4rem', lineHeight: '2rem'}}>{ReactHtmlParser(data.news.about)}</h6>
                </Fade>
            </div>
        </section>
    )
}
    