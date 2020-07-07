import {FETCH_RESTAURANTS} from "./types";
import api from "../apis";


export const fetchRestaurants = () => {
    return async (dispatch) => {
        const res = await api.get('/restaurants');
        await setTimeout(()=> {
            dispatch({
                type: FETCH_RESTAURANTS,
                payload: res.data
            });
        }, 2000);

    }
};