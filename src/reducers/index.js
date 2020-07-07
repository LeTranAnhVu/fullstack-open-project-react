import {combineReducers} from "redux";
import restaurantReducer from "./restaurants";

export default combineReducers({
    restaurants: restaurantReducer
});