import React from 'react'
import Header from './Header/Header'
import Pages from './pages/Pages'
import {HashRouter} from 'react-router-dom';

function HW5() {
    return (
        <div>
            <HashRouter>

            <Header/>
            <Pages/>

            </HashRouter>
        </div>
    )
}

export default HW5
