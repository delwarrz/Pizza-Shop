import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllPizzaReducer } from "./reducers/PizzaReducers";
import { CartReducer } from "./reducers/CartReducer";

const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    CartReducer: CartReducer
});

const cartItems = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];

const initialState = {
    CartReducer: {
        cartItems: cartItems
    }
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;