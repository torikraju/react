const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id:new Date(),value: state.counter})
            }
    }

    return state;
}

export default reducer;