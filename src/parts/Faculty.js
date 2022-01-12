import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function Faculty(props) {
    return (
        <section className="container" ref={props.refPrestasi}>
            <Fade Bottom delay={200}>
            <h4 style={{color: '#CC96F0', fontSize: 20}} className="mb-3">Detail Fakultas</h4>
            <p style={{marginTop: -12}} className="text-white mb-4 font-weight-light w-75">Daftar prestasi tahunan fakultas dibidang akademik dan non akademik</p>
            <div className="container-grid">
                {props.data.map((item, index) => {
                    return <div className="item column-4 row-1" key={`faculty-${index}`}>
                        <Fade Left delay={500 * index}> 
                        <div style={{borderColor: 'transparent'}} className="card card-featured border-0">
                            <figure className="img-wrapper">
                                <img src={item.imageUrl} alt={item.name} className="img-cover" />
                            </figure>
                            <div className="meta-wrapper">
                                <Button type="link" className="streched-link d-block" href={`/fakultas/${item._id}`}>
                                    <h5 style={{color: '#CC96F0', fontWeight: 'bold'}}>{item.nick}</h5>
                                </Button>
                                <span>{item.name}</span>
                            </div>
                        </div>
                        </Fade>
                    </div>
                })}
            </div>
            </Fade>
        </section>
    )
}
