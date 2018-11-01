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
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: updatedArray
            }
    }

    return state;
}

export default reducer;