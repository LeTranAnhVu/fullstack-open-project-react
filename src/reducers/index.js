import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // use local storage
import restaurantReducer from "./restaurants";
import cartReducer from "./cart";
import currentUserReducer from "./currentUser";
import {CLEAR_ALL} from "../actions/types";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const appReducer =  combineReducers({
    restaurants: restaurantReducer,
    cart: cartReducer,
    currentUser: currentUserReducer
});

const rootReducer = (state, action) => {
    // Clear all data in redux store to initial.
    if(action.type === CLEAR_ALL)
        state = undefined;
    return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);