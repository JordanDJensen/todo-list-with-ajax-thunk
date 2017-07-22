let defaultState = {
    items: []
}

const mainReducer = (state = defaultState, action) => {
    if (action.type === "SET_DATA") {
        return {
            ...state,
            items: action.items
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;