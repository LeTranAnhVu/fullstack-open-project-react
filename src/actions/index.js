import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "./types";
import api from "../apis";
import uuidV1 from "uuid/v1";


export const fetchRestaurants = () => async (dispatch) => {
    const res = await api.get('/restaurants');
    const formattedData = res.data.map((restaurant) => ({...restaurant, id: uuidV1()}));
    dispatch({
        type: FETCH_RESTAURANTS,
        payload: formattedData
    });
};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};