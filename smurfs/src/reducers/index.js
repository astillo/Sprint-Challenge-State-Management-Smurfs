import { FETCHING_DATA, DISPLAY_DATA } from '../actions/'

export const initState = {
    smurfs: []
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case DISPLAY_DATA:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state
    }
}