import {combineReducers} from "redux";
import restaurantReducer from "./restaurants";
import cartReducer from "./cart";

export default combineReducers({
    restaurants: restaurantReducer,
    cart: cartReducer
});