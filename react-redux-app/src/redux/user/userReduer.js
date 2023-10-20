import { FETCH_USERS_REQUEST } from "./userTypes"
import { FETCH_USERS_SUCCESS } from "./userTypes"
import { FETCH_USERS_FAILURE } from "./userTypes"

const inititlState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = inititlState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer