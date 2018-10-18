import React from 'react';
import style from './SideDrawer.module.css';
import Logo from '../../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    //...

    let attachedClasses = [style.SideDrawer, style.Close];

    if (props.open) {
        attachedClasses = [style.SideDrawer, style.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;