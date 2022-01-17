import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function NewsPage({data}) {
    return (
        <Fade left delay={500}>
        <section className="container mt-5">
            
                <section key={`news`}>
                        <div className="container-grid">
                        { data.map((news, index) => {
                            return <div className="item column-4 row-1" key={`news-${index}`}>
                                    <Fade left delay={500 * index}>
                                    <div style={{background: 'transparent'}} className="card">
                                        <figure className="img-wrapper" style={{height: 180}}>
                                            <img src={news.image} alt={news.headline} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button type="link" href={`/news/${news._id}`} style={{color: '#CC96F0'}} className="stretched-link d-block">
                                                <h5 style={{textTransform: 'uppercase', fontWeight: 'bold'}} className="h4">{news.topic}</h5>
                                            </Button>
                                            <span className="text-white">
                                                {news.headline}
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


