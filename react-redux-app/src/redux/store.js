import { legacy_createStore as createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

export default store

