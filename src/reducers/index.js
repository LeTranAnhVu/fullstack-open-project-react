import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // use local storage
import restaurantReducer from "./restaurants";
import cartReducer from "./cart";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer =  combineReducers({
    restaurants: restaurantReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);