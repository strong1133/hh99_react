import { createStore, combineReducers, applyMiddleware } from "redux";
import { createBrowserHistory } from 'history';
import thunk from "redux-thunk"

import Todo from './modules/Todo'

export const history = createBrowserHistory();
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({Todo});

const store = createStore(rootReducer,enhancer);

export default store;

