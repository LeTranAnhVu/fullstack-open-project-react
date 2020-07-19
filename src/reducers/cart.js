import _ from 'lodash';

const cartReducer = (cart = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {...cart, [action.payload.itemId]: action.payload};
        }
        case 'UPDATE_TO_CART': {
            return {...cart, [action.payload.itemId]: action.payload};
        }
        case 'DELETE_TO_CART': {
            let cloneCart = {...cart};

            delete cloneCart[action.payload.itemId];
            return cloneCart;
        }
        default: {
            return cart;
        }
    }
};

export default cartReducer;