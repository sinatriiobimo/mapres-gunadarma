import React from 'react';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';

export default function FacultyMajor({data}) {
    return (
        <section style={{width: '80%', marginRight: '1rem'}} className="mx-auto">
            <Fade>
            <div style={{marginLeft: '7.5rem',width: '45%'}}>
                <h6 style={{marginBottom: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                    Prestasi{" "}
                    <span style={{color: '#E8B9FF'}}>Jurusan</span>
                </h6>
                <p style={{lineHeight: '1.7rem'}} className="mb-3">
                    Peraihan prestasi dari setiap jurusan pada berbagai kompetisi
                </p>
            </div>  
            </Fade>

            <section className="mt-5">
                <Fade>
                    <div style={{marginLeft: '7.5rem',width: '75%'}}>
                            {data.majorId.map((major, index) => {
                                return <Fade delay={index * 500}> <Button type="link" 
                                    style={{textDecoration: 'none'}}
                                    className="streched-link d-flex mb-3" 
                                    key={`major-${index}`}
                                    href={`/major/${major._id}`}>
                                        <div className="rec-bullet mt-4">
                                            <div className="bullet"></div>
                                        </div>
                                        <div className="major-box mx-auto">
                                            <h4 className='font-major'>{major.name}</h4>
                                        </div>
                                </Button></Fade>
                            })}
                    </div>
                </Fade>
            </section>
            
        </section>
    )
}
