import {DELETE_TO_CART, ADD_TO_CART, UPDATE_TO_CART, UPDATE_ADDRESS_TO_CART, REMOVE_CART} from "../actions/types";

const INIT_VALUE = {
    'address': null,
    'items': {}
};

const cartReducer = (cart = INIT_VALUE, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {...cart, items: {...cart.items, [action.payload.id]: action.payload}};
        }
        case UPDATE_TO_CART: {
            return {...cart, items: {...cart.items, [action.payload.id]: action.payload}};
        }
        case UPDATE_ADDRESS_TO_CART: {
            return {...cart, 'address': action.payload};
        }
        case DELETE_TO_CART: {
            let cloneCart = {...cart};
            delete cloneCart.items[action.payload];
            return cloneCart;
        }
        case REMOVE_CART: {
            return INIT_VALUE;
        }
        default: {
            return cart;
        }
    }
};

export default cartReducer;