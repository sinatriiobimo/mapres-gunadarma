import React from 'react'
import formatNumber from 'utils/formatNumber'

export default function FacultyFeature({data}) {
    return (
        <div style={{backgroundColor: '#E5D8F5', width: 280, height: 110, marginLeft: '2rem'}} className="p-4 rounded">
            <div className="d-flex">
                <div style={{width: 'auto', fontSize: '50px'}}>{data.icon}</div>
                <div className="ml-5">
                    <span style={{color: '#120632', fontWeight: 'normal', fontSize: '1.1rem'}} className="d-block">{data.meta}</span>
                    <span style={{color: '#8800F3', fontWeight: 'bold', fontSize: '1.875rem', lineHeight: '2.25rem'}}>
                        {typeof data.value === "number" 
                            ? formatNumber(data?.value)
                            : data?.value}
                    </span>
                </div>
            </div>
        </div>
        )
    }
    