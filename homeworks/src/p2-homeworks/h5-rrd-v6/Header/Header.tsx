import React, {MouseEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../pages/Pages';
import s from './Header.module.css';

function Header() {
    return (
        <div className={s.wrapper}>
            <nav className={s.navlink_list}>
                <NavLink className={({isActive})=> isActive?s.active_navlink:s.navlink} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={({isActive})=> isActive?s.active_navlink:s.navlink} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={({isActive})=> isActive?s.active_navlink:s.navlink} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </nav>
            <div className={s.menu}>Menu</div>
        </div>
    );
}

export default Header;
