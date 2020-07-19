import {FETCH_RESTAURANTS, SORT_RESTAURANTS} from "./types";

import api from "../apis/index"


export const fetchRestaurants = (metaPage) => async (dispatch) => {
    let queryStr = "";
    if (metaPage) {
        queryStr = `page=${metaPage['page'] || 1}&per_page=${metaPage['perPage'] || 10}&keyword=${metaPage['keyword'] || ''}`;
    }
    const data = (await api.get('/restaurants?' + queryStr)).data;
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


// cart

export const addToCart = (item) => (dispatch) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: item
    })
};

export const updateToCart = (item) => {
    return {
        type: 'UPDATE_TO_CART',
        payload: item
    }
};

export const deleteToCart = (item) => {
    return {
        type: 'DELETE_TO_CART',
        payload: item
    }
};