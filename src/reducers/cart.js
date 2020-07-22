import {DELETE_TO_CART, ADD_TO_CART, UPDATE_TO_CART} from "../actions/types";

const cartReducer = (cart = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {...cart, [action.payload.id]: action.payload};
        }
        case UPDATE_TO_CART: {
            return {...cart, [action.payload.id]: action.payload};
        }
        case DELETE_TO_CART: {
            let cloneCart = {...cart};
            delete cloneCart[action.payload];
            return cloneCart;
        }
        default: {
            return cart;
        }
    }
};

export default cartReducer;