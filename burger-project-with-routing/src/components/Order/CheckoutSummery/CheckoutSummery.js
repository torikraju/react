import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSummery.module.css';

const checkoutSummery = (props) => {
    return (
        <div className={styles.CheckoutSummery}>
            <h1>We hope it tests well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>

        </div>
    );
};

export default checkoutSummery;