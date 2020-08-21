import { combineReducers, createStore } from 'redux'
import * as reducerFun from '../reducer/index'

const reducer = combineReducers(reducerFun)
const store = createStore(reducer)

export default store