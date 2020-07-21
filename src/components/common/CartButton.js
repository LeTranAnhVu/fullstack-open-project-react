import React, {useState, useEffect} from "react";
import _ from 'lodash';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartPopup from "./CartPopup";

import './CartButton.scss';
import useFormattingCurrency from "../../hooks/useFormattingCurrency";

const CartButton = () => {
    const {cart} = useSelector((state) => {
        return ({cart: Object.keys(state.cart).map((itemId) => state.cart[itemId])});
    });
    const [symbol, total, setPrice] = useFormattingCurrency('$', 0);

    const [isShowPopup, togglePopup] = useState(false);
    useEffect(() => {
        if (!_.isEmpty(cart)) {

            let currency = cart[0].currency;
            let total = cart.reduce((_total, item) => {
                return _total + item.amount * item.delivery_price;
            }, 0);
            setPrice(currency, total);
        }
    }, [cart]);

    if (!_.isEmpty(cart)) {
        return (
            <div className='cart-button-div'>
                <button onClick={() => togglePopup(!isShowPopup)}>
                    <FontAwesomeIcon icon={['fa', 'cart-plus']}/>
                    <p className='number-items'>{cart.length <= 9 ? cart.length: '9+' }</p>
                    Total: {symbol + total}
                </button>
                {
                    isShowPopup ?
                        <CartPopup width='150%' top='100%' right='0'/>
                        : null
                }
            </div>
        )
    } else {
        return null;
    }

};

export default CartButton;