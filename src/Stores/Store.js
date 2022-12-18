import { createStore,applyMiddleware,compose, combineReducers } from "redux";
import GetAllProducts from '../Reducers/GetAllProducts'
import UserLogin from '../Reducers/UserLogin'
import BuyProducts from '../Reducers/BuyProducts'
import thunk from "redux-thunk";
import AddToCart from "../Reducers/AddToCart";
import RemoveFromCart from "../Reducers/RemoveFromCart";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const mainReducers = combineReducers({
    allProduct : GetAllProducts,
    UserLoginData : UserLogin,
    BuyProductsData : BuyProducts,
    CartData : AddToCart,
    RemoveFromCartResult:RemoveFromCart,
})
const store = createStore(
mainReducers,
composeEnhancers(applyMiddleware(thunk)),
);

export default store;