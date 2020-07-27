import {
    ADD_TO_CART,
    DELETE_TO_CART, DELETE_USER,
    FETCH_RESTAURANT,
    FETCH_RESTAURANTS,
    SORT_RESTAURANTS, UPDATE_ADDRESS_TO_CART,
    UPDATE_TO_CART, UPDATE_USER, REMOVE_CART, CLEAR_ALL
} from "./types";

import api from "../apis/index"


export const clearAllData = () => {
    return {
        type: CLEAR_ALL
    }
}

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
    try {
        let data = (await api.get(`restaurants/${id}`)).data.restaurant;
        dispatch({
            type: FETCH_RESTAURANT,
            payload: data
        })
    } catch (e) {
        return null
    }


};

export const sortRestaurants = (status) => (dispatch) => {
    dispatch({
        type: SORT_RESTAURANTS,
        payload: status
    })
};


// CART

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
};

export const updateToCart = (item) => {
    return {
        type: UPDATE_TO_CART,
        payload: item
    }
};

export const updateAddressToCart = (address) => {
    return {
        type: UPDATE_ADDRESS_TO_CART,
        payload: address
    }
};

export const deleteToCart = (item) => {
    return {
        type: DELETE_TO_CART,
        payload: item
    }
};

export const removeCart = () => {
    return {
        type: REMOVE_CART
    }
};

// CURRENT USER
export const updateCurrentUser = ({username, logined_at, id}) => {
    return {
        type: UPDATE_USER,
        payload: {username, logined_at, id}
    }
};

export const deleteCurrentUser = () => {
    return {
        type: DELETE_USER,
        payload: null
    }
};

