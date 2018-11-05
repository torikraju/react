import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from "../uitility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId});
    return updateObject(state, {
        loading: false,
        purchased: true,
        order: state.orders.concat(newOrder)
    });
};

const purchaseInit = (state) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerStart = (state) => {
    return updateObject(state, {purchased: false});
};

const purchaseBurgerFailed = (state) => {
    return updateObject(state, {loading: false});
};
const fetchOrderStart = (state) => {
    return updateObject(state, {loading: true});
};

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        orders: action.orders,
        loading: false
    });
};

const fetchOrderFailed = (state) => {
    return updateObject(state, {loading: false});
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_INIT:
            return purchaseInit(state);
        case actionsTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state);
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action);
        case actionsTypes.PURCHASE_BURGER_FAILED:
            return purchaseBurgerFailed(state);
        case actionsTypes.FETCH_ORDER_START:
            return fetchOrderStart(state);
        case actionsTypes.FETCH_ORDER_SUCCESS:
            return fetchOrderSuccess(state, action);
        case actionsTypes.FETCH_ORDER_FAILED:
            return fetchOrderFailed(state);
        default:
            return state;
    }
};

export default reducer;