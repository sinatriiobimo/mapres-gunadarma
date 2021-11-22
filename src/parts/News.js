import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function News({data}) {
    return (
        <Fade left delay={500}>
        <section className="container">
            <h4 style={{color: '#CC96F0', fontSize: 20}} className="mb-3">Redaksi Universitas</h4>
            <p style={{marginTop: -12}} className="text-white mb-4 font-weight-light w-75">Berita terkini mengenai riset, prestasi, dan kehidupan kampus</p>
            {
                data.map((news, index1) => {
                    return <section key={`news-${index1}`}>
                        <div className="container-grid">
                            {
                                news.items.length === 0 ? <div className="row">
                                    <div className="col-auto align-items-center">
                                        There is no news in this category
                                    </div>
                                </div> : news.items.map((item, index2) => {
                                    return <div className="item column-4 row-1" key={`category-${index1}-item-${index2}`}>
                                        <Fade left delay={500 * index2}>
                                        <div style={{background: 'transparent'}} className="card">
                                            {item.isHot && (<div className="tag">
                                                Hot <span className="font-weight-light">News</span></div>
                                            )}
                                            <figure className="img-wrapper" style={{height: 180}}>
                                                <img src={item.imageUrl} alt={item.headline} className="img-cover" />
                                            </figure>
                                            <div className="meta-wrapper">
                                                <Button type="link" href={`/properties/${item._id}`} style={{color: '#CC96F0'}} className="stretched-link d-block">
                                                    <h5 style={{textTransform: 'uppercase', fontWeight: 'bold'}} className="h4">{item.type}</h5>
                                                </Button>
                                                <span className="text-white">
                                                    {item.headline}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                    </div>
                                })
                            }
                        </div>
                    </section>
                })
            }
        </section>
        </Fade>
    )
}


