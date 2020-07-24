import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // use local storage
import restaurantReducer from "./restaurants";
import cartReducer from "./cart";
import currentUserReducer from "./currentUser";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer =  combineReducers({
    restaurants: restaurantReducer,
    cart: cartReducer,
    currentUser: currentUserReducer
});

export default persistReducer(persistConfig, rootReducer);