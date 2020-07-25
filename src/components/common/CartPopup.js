import React from "react";
import _ from 'lodash';
import Divide from "./Divide";
import history from "../../helpers/history";
import './CartPopup.scss'
import {useSelector} from "react-redux";
import CartPopupItem from "./CartPopupItem";

const CartPopup = ({top, right, width = '100%', onClose}) => {
    const {cartItems} = useSelector((state) => {
        if (state.cart) {
            return ({
                cartItems: Object.keys(state.cart.items).map((itemId) => state.cart.items[itemId])
            });
        }
        return {cartItems: null}
    });

    const buildList = () => {
        if(!_.isEmpty(cartItems)) {
            return cartItems.map(item => {
                return <CartPopupItem key={item.id} item={item}/>
            })
        }
        return null;
    };
    return (
        <div style={{width: width, top: top, right: right}} className='cart-popup'>
            {/*<p className='empty-message'>Your cart is empty</p>*/}
            <ul className='list-item'>
                {buildList()}
            </ul>
            <Divide/>
            <button onClick={() => {history.push(`/checkout`); onClose()}} className='checkout-button'>Go to checkout</button>
        </div>
    );
};

export default CartPopup;