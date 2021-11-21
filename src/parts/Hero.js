import React from 'react';
import ImageHero_ from 'assets/images/img-hero-frame.png';
import IconMedals from 'assets/images/ic_medals.svg';
import IconAchieve from 'assets/images/ic_achieve.svg';
import IconRank from 'assets/images/ic_rank.svg';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';
import "assets/scss/style.scss";

import formatNumber from 'utils/formatNumber';

export default function Hero(props) {
    function showPrestasi() {
        window.scrollTo({
            top: props.refPrestasi.current.offsetTop - 30,
            behavior: 'smooth'
        });
    }

    return (
        <Fade Bottom delay={200}>
        <section className="container pt-4">
            <div style={{marginLeft: 2, marginTop: 20}} className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 550 }}>
                    <h1 style={{lineHeight: 1.3, fontWeight: '600'}} className="text-white mb-4">
                        <span className="font-weight-light">Nyalakan</span> Potensi, <br/>
                        <span className="font-weight-light">Ciptakan Ruang</span> Prestasi
                    </h1>
                    <p style={{fontSize: 15, lineHeight: '170%'}} className="text-white mb-5 font-weight-light text-gray-500 w-75">
                    Temukan gerakan dan inovasi mahasiswa yang telah berhasil menuliskan sejarah baru bagi <span style={{fontWeight: '600'}}>Universitas Gunadarma</span> 
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showPrestasi}>
                        Lihat Prestasi
                    </Button>

                    <div className="row mt-5">
                        <div className="col-auto" style={{marginRight: 30}}>
                            <img width="36" height="36" src={IconMedals} alt="Medals"/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.medals)} <span className="text-gray-500 font-weight-light">Prestasi</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 30}}>
                            <img width="36" height="36" src={IconAchieve} alt="Achieve"/>
                            <h6 className="mt-3">
                                {formatNumber(props.data.achieves)} <span className="text-gray-500 font-weight-light">Mapres</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img width="36" height="36" src={IconRank} alt="Rank"/>
                            <h6 className="mt-3">
                                {props.data.rank} <span className="text-gray-500 font-weight-light">Rank</span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{width: 520, height: 370}}>
                        <img src={ImageHero_} alt="Mapres UG" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}}/>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    )
}
