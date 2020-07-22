import {createStore, applyMiddleware, compose} from "redux";
import {persistStore} from "redux-persist";
import reducers from "./reducers";

import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
