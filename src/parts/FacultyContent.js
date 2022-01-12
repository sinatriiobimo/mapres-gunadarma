import React from 'react';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from 'react-html-parser';

export default function FacultyContent({data}) {
    return (
            <section style={{width: '80%', marginTop: '2rem', marginRight: '1rem'}} className="d-flex mx-auto">
            <Fade left>
            <div style={{marginLeft: '7.5rem',width: '45%'}}>
                <section>
                    <h6 style={{marginBottom: '3rem', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                        Tentang{" "}
                        <span style={{color: '#E8B9FF'}}>Fakultas</span>
                    </h6>
                    <p style={{lineHeight: '1.7rem'}} className="mb-3">
                        {ReactHtmlParser(data?.about) ?? "No Description Found"}
                    </p>
                </section>
            </div>
            </Fade>
            <Fade right>
            <div style={{width: '35%'}}>
                <section>
                    <div style={{width: '20px'}}>
                        <img style={{width: '490px'}} src={data.imageId?.[1].image} alt={data.imageId?.[1].image}/>
                    </div>
                </section>
            </div>
            </Fade>
            </section>
    )
}
