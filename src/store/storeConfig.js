import { createStore, combineReducers } from 'redux'
import CRUD from './reducers/crud'

const reducers = combineReducers({
    data: CRUD
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig