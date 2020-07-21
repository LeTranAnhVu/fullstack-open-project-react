import React from "react";
import _ from 'lodash';
import Divide from "./Divide";
import {Row, Col} from 'reactstrap';
import SquareImage from "./SquareImage";
import './CartPopup.scss'
import {useSelector} from "react-redux";
import useFormattingCurrency from "../../hooks/useFormattingCurrency";
import CartPopupItem from "./CartPopupItem";

const CartPopup = ({top, right, width = '100%'}) => {
    const {cart} = useSelector((state) => {
        return ({cart: Object.keys(state.cart).map((itemId) => state.cart[itemId])});
    });

    const buildList = () => {
        if(!_.isEmpty(cart)) {
            return cart.map(item => {
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
            <button className='checkout-button'>Go to checkout</button>
        </div>
    );
};

export default CartPopup;