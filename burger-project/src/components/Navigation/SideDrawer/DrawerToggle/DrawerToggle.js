import React from 'react';
import style from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={style.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;