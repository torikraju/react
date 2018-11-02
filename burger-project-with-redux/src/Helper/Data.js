import AppUtil from "./AppUtil";
import React from "react";
import BurgerIngredient from "../components/Burger/BurgerIngredient/BurgerIngredient";

class Data {

    static burgerInfo = {
        totalPrice: 20,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false

    }

    static INGREDIENTS_PRICES = {
        salad: 12,
        cheese: 25,
        meat: 42,
        bacon: 37
    }

    static ingredientSummary = (ingredients) => {
        return Object.keys(ingredients)
            .map(igKey => {
                return <li key={AppUtil.ID()}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {ingredients[igKey]}</span>
                </li>
            });
    }

    static transformedIngredients = (ingredients) => {
        return Object.keys(ingredients)
            .map(ingredientKey => {
                return [...Array(ingredients[ingredientKey])].map((_, i) => {
                    return <BurgerIngredient key={AppUtil.ID()} type={ingredientKey}/>
                });
            })
            .reduce((arr, el) => {
                return arr.concat(el);
            }, []);
    }

    static orderForm = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {required: true},
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {required: true},
                valid: false,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 4,
                    maxLength: 6
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {required: true},
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {required: true},
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }


}

export default Data