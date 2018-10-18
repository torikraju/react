import React from 'react';
import Aux from '../../../hoc/Auxiliary'
import Data from "../../../Helper/Data";
import Button from '../../../UI/Button/Button'

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
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;