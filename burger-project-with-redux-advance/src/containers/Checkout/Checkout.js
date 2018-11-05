import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import ContactData from '../Checkout/ContactData/ContactData';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';


class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summery = <Redirect to='/'/>;
        if (this.props.ingredients) {
            summery = (
                <div>
                    <CheckoutSummery
                        ingredients={this.props.ingredients}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData}
                    />
                </div>
            );
        }
        return summery;
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients
    }
};


export default connect(mapStateToProps)(Checkout);