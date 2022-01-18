import React from 'react';
import ImageTestimonial from 'assets/images/testimonial-landingpages.png';
import Fade from 'react-reveal/Fade';

export default function Testimonials({data}) {
    return (
        <section className="container">
            <Fade left delay={300}>
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 70}}>
                    <div className="testimonial-hero" style={{margin: `30px 0 0 30px`}}>
                        <img src={ImageTestimonial} alt="" className="position-absolute" />
                    </div>
                </div>
                <div className="col-6" style={{marginBottom: '70px'}}>
                    <h4 style={{marginBottom: '45px', backgroundColor: '#F3A000', fontWeight: 'bold', display: 'inline-block', padding: '0.2em'}}>MAPRES GUNADARMA</h4>
                    <div className="testimonial-text">
                        <h4 style={{color: '#E8B9FF'}}>{data.name}</h4>
                        <span style={{color: '#CFCFCF'}}>{data.major}, {data.yearStart}</span>
                    </div>
                    <h5 className="h2 font-weight-light line-height-2 my-3" style={{fontSize: '28px', lineHeight: '42px'}}>
                        {data.content}
                    </h5>
                </div>
            </div>
            </Fade>
        </section>
    )
}
