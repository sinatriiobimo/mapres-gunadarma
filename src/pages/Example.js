import React, { Component } from 'react'
import Table from 'parts/Table';

export default class Example extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-auto">
                        <Table></Table>
                    </div>
                </div>
            </div>
        )
    }
}
