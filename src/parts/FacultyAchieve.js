import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import PojokMapres from './PojokMapres';
import IlAcademic from 'assets/images/ilacademic.png';
import IlNonAcademic from 'assets/images/ilnonacademic.png';

export default function FacultyAchieve({data}) {
    return (
            <section style={{width: '80%', marginRight: '1rem'}} className="mx-auto">
                <Fade left>
                <div style={{marginLeft: '7.5rem',width: '45%'}}>
                    <h6 style={{marginBottom: '0.75rem', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                        Tinjau{" "}
                        <span style={{color: '#E8B9FF'}}>Prestasi</span>
                    </h6>
                    <p style={{lineHeight: '1.7rem'}} className="mb-3">
                        Daftar prestasi akademik dan non-akademik selama 5 tahun terakhir
                    </p>
                </div>  
                </Fade>

                <section className="d-flex mx-auto mt-5">
                    <Fade left>
                        <div style={{marginLeft: '7.5rem',width: '45%'}}>
                        <Button type="link" className="streched-link d-block" href={`/akademik/${data._id}`}>
                            <section className='card-achieve'>
                                <div>
                                    <img className='achieve-il' style={{width: '400px'}} src={IlAcademic} alt="Academic"/>
                                </div>
                            </section>
                        </Button>
                            <h6 style={{marginRight: '4rem', marginBottom: '1rem', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                                Kompetisi{" "}
                                <span style={{color: '#F3A000'}}>Akademik</span>
                            </h6>
                        </div>
                    </Fade>
                    
                    <Fade right>
                    <div style={{marginLeft: '1.5rem',width: '45%', marginBottom: '7rem'}}>
                        <Button type="link" className="streched-link d-block" href={`/non-akademik/${data._id}`}>
                            <section className='card-achieve'>
                                <div>
                                    <img className='achieve-il' style={{width: '395px'}} src={IlNonAcademic} alt="NonAcademic"/>
                                </div>
                            </section>
                        </Button>
                        <h6 style={{marginRight: '5rem', marginTop: '3rem', textAlign: 'center', fontSize: '1.3rem', fontWeight: 'bold'}} className="text-gray-900 ">
                                Kompetisi{" "}
                                <span style={{color: '#F3A000'}}>Non Akademik</span>
                        </h6>
                    </div>
                    </Fade>
                </section> 

                <section style={{marginLeft: '7.5rem',width: '75%'}}>
                    <h6 style={{fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                        Pojok <span style={{color: '#E8B9FF'}}>Mapres</span>
                    </h6>
                    <p style={{lineHeight: '1.7rem'}} className="mb-1">
                        Simak tips dari teman teman kita yang berhasil mengharumkan nama Universitas Gunadarma
                    </p>

                    {data.distinguish?.studentId?.map?.((testimonial, index) => {
                        return <Fade delay={500}> <PojokMapres key={index} data={testimonial}></PojokMapres> </Fade>
                    })}
                </section>
            </section>
    )
}
