import React from 'react'
import ReactHtmlParser from 'react-html-parser';

export default function PojokMapres({data}) {
    return (
        data.distinguishId.length ?
        <section className="container mx-auto" id="testimonials">
        
        <div style={{marginBottom: '.5rem'}} className="d-flex">
            <div style={{width: '89%', marginTop: '4rem'}}>
                <h2 style={{fontSize: '1.6rem', lineHeight: '2.25rem'}} className="text-gray-900 font-light">
                    {data.distinguishId.map(dt => ReactHtmlParser(dt.about))}
                </h2>
                <div style={{marginTop: '2rem'}} className="testimonial-info">
                    <div style={{fontSize: '1.25rem', lineHeight: '1.5rem', color: '#E8B9FF', fontWeight: 'bold'}}>{data.name}</div>
                    <div style={{color: '#CBCBCB', marginTop: '.25rem'}} className="font-light">
                        {data.distinguishId.map(dt => ReactHtmlParser(dt.best))}
                    </div>
                </div>
                <div style={{marginTop: '2.5rem'}} className="testimonial-icon mt-10">
                    <img
                    src={data.image}
                    alt=""
                    style={{width: '5rem', marginRight: '1.25rem'}}
                    className="d-inline-block testimonial-user active rounded-circle"
                    />
                </div>
            </div>
            <div className="w-2/12"></div>
        </div>
        </section> : ''
    )
}
