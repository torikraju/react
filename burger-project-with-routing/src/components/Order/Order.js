import React from 'react';
import styles from './Order.module.css';


const Order = () => {
    return (
        <div className={styles.Order}>
            <p>Ingredients: Salad (1) </p>
            <p>Price: <strong> TK. 60.00</strong></p>
        </div>
    );
};

export default Order;