import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummery';
import Data from "../../Helper/Data";
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import AppUtil from "../../Helper/AppUtil";
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {

    state = Data.burgerInfo;

    componentDidMount() {
        //fetching data from server
        //console.log(this.props);
        this.props.onInitIngredients();

    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            this.props.history.push('/auth');
        }


    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push({
            pathname: '/checkout'
        });
    };

    render() {
        const disableInfo = {
            ...this.props.ings
        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        let orderSummery = null;

        let burger = this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>;
        if (this.props.ings) {
            burger = (<Aux><Burger ingredients={this.props.ings}/>
                <BuildControls
                    ingredientAdded={this.props.onIngredientAdded}
                    ingredientRemoved={this.props.onIngredientRemoved}
                    disable={disableInfo}
                    price={this.props.price}
                    isAuth={this.props.isAuthenticated}
                    purchasable={AppUtil.isPurchasable(this.props.ings)}
                    order={this.purchaseHandler}/>
            </Aux>);
            orderSummery = (<OrderSummary
                ingredients={this.props.ings}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler}
                price={this.props.price}/>);
        }

        if (this.state.loading) {
            orderSummery = <Spinner/>
        }


        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummery}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));