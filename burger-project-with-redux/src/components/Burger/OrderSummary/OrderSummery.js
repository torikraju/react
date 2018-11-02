import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Data from "../../../Helper/Data";
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        //console.log("[OrderSummary] willUpdate")
    }

    render() {
        const ingredientSummary = Data.ingredientSummary(this.props.ingredients);
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }

}

export default OrderSummary;