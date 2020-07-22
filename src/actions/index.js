import {
    ADD_TO_CART,
    DELETE_TO_CART,
    FETCH_RESTAURANT,
    FETCH_RESTAURANTS,
    SORT_RESTAURANTS,
    UPDATE_TO_CART
} from "./types";

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

export const fetchRestaurant = (id) => async (dispatch) => {
    let data = (await api.get(`restaurants/${id}`)).data.restaurant;
    dispatch({
        type: FETCH_RESTAURANT,
        payload: data
    })

};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};


// cart

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
};

export const updateToCart = (id) => {
    return {
        type: UPDATE_TO_CART,
        payload: id
    }
};

export const deleteToCart = (item) => {
    return {
        type: DELETE_TO_CART,
        payload: item
    }
};