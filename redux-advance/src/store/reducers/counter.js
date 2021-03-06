import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        default:
            return state;
    }
};

export default reducer;