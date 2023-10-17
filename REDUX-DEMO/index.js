// const redux = require('redux')
import { legacy_createStore as createStore, combineReducers } from 'redux'

// const createStore = createStore

// action 1
{
    type: 'BUY_CAKE'
    info: 'First redux action'
}

function buyCake() {
    return {
        type: 'BUY_CAKE',
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: 'BUY_ICECREAM'
    }
}

// (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case 'BUY_ICECREAM':
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()