import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function News({data}) {
    return (
        <Fade left delay={500}>
        <section className="container">
            <h4 style={{color: '#CC96F0', fontSize: 20}} className="mb-3">Redaksi Universitas</h4>
            <div style={{marginTop: -3}} className="d-flex text-white mb-4 font-weight-light">
                <p className="w-35">Berita terkini mengenai riset, prestasi, dan kegiatan kampus</p>
                <p style={{marginLeft: '30rem', color: '#EECAFF'}}>
                <Button type="link" href={`/news`} style={{color: '#CC96F0', textDecoration: 'none'}} className="stretched-link d-block">
                    Lihat Selengkapnya
                </Button>
                </p>
            </div>
            <section key={`news`}>
                        <div className="container-grid">
                        { data.map((item, index) => {
                            return <div className="item column-4 row-1" key={`item-${index}`}>
                                    <Fade left delay={500 * index}>
                                    <div style={{background: 'transparent'}} className="card">
                                        <figure className="img-wrapper" style={{height: 180}}>
                                            <img src={`${process.env.REACT_APP_HOST}/${item.image}`} alt={`${process.env.REACT_APP_HOST}/${item.image}`} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button type="link" href={`/news/${item._id}`} style={{color: '#CC96F0'}} className="stretched-link d-block">
                                                <h5 style={{textTransform: 'uppercase', fontWeight: 'bold'}} className="h4">{item.topic}</h5>
                                            </Button>
                                            <span className="text-white">
                                                {item.headline}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                                </div>
                    })}
                        </div>
                    </section>
        </section>
        </Fade>
    )
}


