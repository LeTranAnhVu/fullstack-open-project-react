import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "./types";

import {restaurantsRef} from '../firebase'


export const fetchRestaurants = () => async (dispatch) => {
    restaurantsRef.on("value", snapshot => {
        const restaurants = snapshot.val();
        dispatch({
            type: FETCH_RESTAURANTS,
            payload: restaurants
        });

    });

};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};