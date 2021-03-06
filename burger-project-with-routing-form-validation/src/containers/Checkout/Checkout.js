import React, {Component} from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let params of query.entries()) {
            //['salad,'1']
            if (params[0] === 'price') {
                price = params[1];
            } else {
                ingredients[params[0]] = +params[1];
            }

        }
        this.setState({ingredients: ingredients, totalPrice: price})
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
                    render={() => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}/>)}
                />
            </div>
        );
    }
}

export default Checkout;