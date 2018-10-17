import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Data from "../../../Helper/Data";


const orderSummary = (props) => {
    const ingredientSummary = Data.ingredientSummary(props.ingredients);

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default orderSummary;