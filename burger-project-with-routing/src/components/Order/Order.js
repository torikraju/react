import React from 'react';
import styles from './Order.module.css';


const Order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span className={styles.Span}
                     key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong> TK. {Number.parseFloat(props.price.toFixed(2))}</strong></p>
        </div>
    );
};

export default Order;