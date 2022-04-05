import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Error404 from './Error404/Error404';
import Junior from './Junior/Junior';
import PreJunior from './PreJunior/PreJunior';
import JuniorPlus from './JuniorPlus/JuniorPlus';

export const PATH = {
    PRE_JUNIOR: '/PreJunior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/JuniorPlus'
};

function Pages() {
    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    );
}

export default Pages;
