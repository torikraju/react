import * as actionsTypes from '../actions/actionTypes';
import {updateObject} from "../uitility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});
        case actionsTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: true});
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, {id: action.orderId});
            return updateObject(state, {
                loading: false,
                purchased: true,
                order: state.orders.concat(newOrder)
            });
        case actionsTypes.PURCHASE_BURGER_FAILED:
            return updateObject(state, {loading: false});
        case actionsTypes.FETCH_ORDER_START:
            return updateObject(state, {loading: true});
        case actionsTypes.FETCH_ORDER_SUCCESS:
            return updateObject(state, {
                orders: action.orders,
                loading: false
            });
        case actionsTypes.FETCH_ORDER_FAILED:
            return updateObject(state, {loading: false});
        default:
            return state;
    }
};

export default reducer;