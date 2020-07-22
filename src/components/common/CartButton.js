import React, {useState, useEffect} from "react";
import _ from 'lodash';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartPopup from "./CartPopup";

import './CartButton.scss';
import useFormattingCurrency from "../../hooks/useFormattingCurrency";
import calcTotal from "../../helpers/calcTotal";

const CartButton = () => {
    const {cart} = useSelector((state) => {
        return ({cart: Object.keys(state.cart).map((itemId) => state.cart[itemId])});
    });
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');

    const [isShowPopup, togglePopup] = useState(false);
    useEffect(() => {
        if(!_.isEmpty(cart)){
            const [currency, total] = calcTotal(cart);
            setCurrency(currency);
            setTotal(total);
        }
    }, [cart]);

    if (!_.isEmpty(cart)) {
        return (
            <div className='cart-button-div'>
                <button onClick={() => togglePopup(!isShowPopup)}>
                    <FontAwesomeIcon icon={['fa', 'cart-plus']}/>
                    <p className='number-items'>{cart.length <= 9 ? cart.length: '9+' }</p>
                    Total: {currency + total}
                </button>
                {
                    isShowPopup ?
                        <CartPopup onClose={() => {togglePopup(!isShowPopup)}} width='150%' top='100%' right='0'/>
                        : null
                }
            </div>
        )
    } else {
        return null;
    }

};

export default CartButton;