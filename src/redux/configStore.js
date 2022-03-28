import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import word from "./modules/word"

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({word});

const store = createStore(rootReducer, enhancer);

export default store;