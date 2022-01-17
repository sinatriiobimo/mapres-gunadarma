import React from 'react';
import FacultyFeature from './FacultyFeature';
import Fade from 'react-reveal/Fade';

export default function FacultyBanner({data}) {
    return (
        <section className="pt-10 relative overflow-hidden"
            style={{ height: 680 }}>
                <Fade>
                    <div className="banner-wrapper">
                        <img src={`${process.env.REACT_APP_HOST}/${data.imageId?.[0].image}`} alt={`${process.env.REACT_APP_HOST}/${data.imageId?.[0].image}`}/>
                    </div>
                </Fade>
                <div className="banner-title"></div>
                <Fade bottom>
                    <div className="items-center">
                        <div style={{marginTop: '15%'}} className="text-center">
                            <span className="text-gray-400">
                                Fakultas
                            </span>
                            <h1 style={{color: '#EECAFF', fontWeight: 'bold'}}>
                                {data?.name}
                            </h1>
                        </div>
                    </div>
                </Fade>

                <section className="container mx-auto position-relative">
                    <div className="info-faculty">
                        <div style={{width: '85%'}} className="mx-auto">
                            <div className="d-flex justify-content-beetween">
                                <Fade delay={200}>
                                    <FacultyFeature data={{
                                        icon: '👨🏻‍🎓',
                                        meta: 'Mahasiswa',
                                        value: data.hero.students ?? 0
                                    }}/>
                                </Fade>
                                <Fade delay={500}>
                                <FacultyFeature data={{
                                    icon: '🏅',
                                    meta: 'Prestasi',
                                    value: data.hero.achievements ?? 0
                                }}/>
                                </Fade>
                                <Fade delay={700}>
                                <FacultyFeature data={{
                                    icon: '🧑🏻‍🏫',
                                    meta: 'Akademik',
                                    value: 'A'?? 0
                                }}/>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    )
}
