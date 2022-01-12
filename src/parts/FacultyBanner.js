import React from 'react';
import FacultyFeature from './FacultyFeature';
import Fade from 'react-reveal/Fade';

export default function FacultyBanner({data, breadcrumb}) {
    return (
        <section className="pt-10 relative overflow-hidden"
            style={{ height: 660 }}>
                <div className="banner-wrapper">
                    <img src={data.imageId?.[0].image} alt={data.imageId?.[0].image}/>
                </div>
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

                <Fade>
                <section className="container mx-auto position-relative">
                    <div className="info-faculty">
                        <div style={{width: '85%'}} className="mx-auto">
                            <div className="d-flex justify-content-beetween">
                                <FacultyFeature data={{
                                    icon: '👨🏻‍🎓',
                                    meta: 'Mahasiswa',
                                    value: data.hero.students ?? 0
                                }}/>
                                <FacultyFeature data={{
                                    icon: '🏅',
                                    meta: 'Prestasi',
                                    value: data.hero.achievements ?? 0
                                }}/>
                                <FacultyFeature data={{
                                    icon: '🧑🏻‍🏫',
                                    meta: 'Akademik',
                                    value: 'A'?? 0
                                }}/>
                            </div>
                        </div>
                    </div>
                </section>
                </Fade>
        </section>
    )
}
