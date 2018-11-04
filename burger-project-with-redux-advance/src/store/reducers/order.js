import * as actionsTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionsTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
            return {
                ...state,
                loading: false,
                order: state.orders.concat(newOrder)
            };
        case actionsTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;