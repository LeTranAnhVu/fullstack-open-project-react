import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "../actions/types";

const DEFAULT_STATE = null;

const sortBy = (status, restaurants) => {
    //acs
    if (status === 1) {
        restaurants.sort((resA, resB) => {
            return resA.name > resB.name ? 1 : (resA.name < resB.name ? -1 : 0)
        })
    } else if (status === 2) {
        //desc
        restaurants.sort((resA, resB) => {
            return resA.name > resB.name ? -1 : (resA.name < resB.name ? 1 : 0)
        })

    }
    return restaurants;
};
const restaurantReducer = (restaurants = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS : {
            return {...action.payload};
        }
        // case SORT_RESTAURANTS: {
        //     let res = sortBy(action.payload, [...restaurants]);
        //     return res;
        // }
        default: {
            return restaurants;
        }
    }
};

export default restaurantReducer;