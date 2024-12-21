import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from 'redux-thunk'
import { authReducer } from "../features/auth/reducer";
import { homeReducer } from "../features/home/reducer";
import { prodReducer } from "../features/products/reducer";
import { cartReducer } from "../features/cart/reducer";
import { favouriteReducer } from "../features/favourite/reducer";

const rootReducer = combineReducers({
    authReducer,
    homeReducer,
    prodReducer,
    cartReducer,
    favouriteReducer
});

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);