const initState = {
    clients: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_FILTERED_DATA':
            return {
                clients: action.payload
            }
        default:
            return state
    }
}

export default reducer;