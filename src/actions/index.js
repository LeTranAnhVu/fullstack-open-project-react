import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "./types";

import api from "../apis/index"


export const fetchRestaurants = () => async (dispatch) => {
    const data = (await api.get('/restaurants')).data.data;
    dispatch({
        type: FETCH_RESTAURANTS,
        payload: data
    });

};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};