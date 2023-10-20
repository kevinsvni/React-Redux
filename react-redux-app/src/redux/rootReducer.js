import { combineReducers } from "redux";
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './icecream/iceCreamReducer'
import chocolateReducer from "./chocolate/chocolateReducer";
import userReducer from "./user/userReduer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    user: userReducer
})

export default rootReducer