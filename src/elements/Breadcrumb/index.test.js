import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from './index';
import { BrowserRouter as Router } from 'react-router-dom';

const setup = () => {
    const breadcrumList = [
        {pageTitle: "Beranda", pageHref: ""},
        {pageTitle: "Detail Fakultas", pageHref: ""}
    ];

    const {container} = render (
        <Router>
            <Breadcrumb data={breadcrumList}/>
        </Router>
    )

    const breadcrumb = container.querySelector('.breadcrumb');

    return {
        breadcrumb
    }
}

test("Should have <ol> with className .breadcrumb and have text Beranda and Detail Fakultas", () => {
    const {breadcrumb} = setup();
    
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Beranda");
    expect(breadcrumb).toHaveTextContent("Detail Fakultas");
})