import {FETCH_RESTAURANTS} from "../actions/types";

const DEFAULT_STATE = [];
const restaurantReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS : {
            return [...action.payload];
        }
        default: {
            return state;
        }
    }
};

export default restaurantReducer;