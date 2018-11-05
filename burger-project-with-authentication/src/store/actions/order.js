import * as actionTypes from './actionTypes';
import axios from '../../axios-order';
import AppUtil from "../../Helper/AppUtil";

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        error: error
    };
};

const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            }).catch(error => {
            console.log(error);
            dispatch(purchaseBurgerFailed(error));
        });
    }
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};

export const fetchOrderSuccess = (ordres) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: ordres
    };
};

export const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAILED,
        error: error
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    };
};

export const fetchOrders = (token) => {
    return dispatch => {
        dispatch(fetchOrderStart);
        axios.get('/orders.json?auth=' + token)
            .then(res => {
                dispatch(fetchOrderSuccess(AppUtil.getOrders(res.data)));
            }).catch(error => {
            dispatch(fetchOrderFailed(error));
        });
    }
};


