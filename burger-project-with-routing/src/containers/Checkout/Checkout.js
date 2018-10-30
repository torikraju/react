import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let params of query.entries()) {
            //['salad,'1']
            ingredients[params[0]] = +params[1];
        }
        this.setState({ingredients: ingredients})
    }

    render() {
        return (
            <div>
                <CheckoutSummery
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;