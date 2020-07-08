import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "./types";
import api from "../apis";


export const fetchRestaurants = () => async (dispatch) => {
    const res = await api.get('/restaurants');
    dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
    });
};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};