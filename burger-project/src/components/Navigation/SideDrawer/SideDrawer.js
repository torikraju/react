import React from 'react';
import style from './SideDrawer.module.css';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    //...
    return (
        <div className={style.SideDrawer}>
            <div className={style.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
};

export default sideDrawer;