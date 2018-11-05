import * as actionTypes from '../actions/actionTypes';
import Data from "../../Helper/Data";
import {updateObject} from "../uitility";


const initialState = {
    ingredients: null,
    totalPrice: 20,
    error: false
};

const INGREDIENTS_PRICES = Data.INGREDIENTS_PRICES

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedS = {
                ingredients: updatedIngs,
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedS);
        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat
                },
                error: false,
                totalPrice: initialState.totalPrice
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
        default:
            return state;
    }

};

export default burgerBuilder;