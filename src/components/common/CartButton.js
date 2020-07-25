import React, {useState, useEffect} from "react";
import _ from 'lodash';
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartPopup from "./CartPopup";

import './CartButton.scss';
import useFormattingCurrency from "../../hooks/useFormattingCurrency";
import calcTotal from "../../helpers/calcTotal";

const CartButton = () => {
    const {cartItems} = useSelector((state) => {
        if (state.cart) {
            return ({
                cartItems: Object.keys(state.cart.items).map((itemId) => state.cart.items[itemId])
            });
        }
        return {cartItems: null}
    });
    const [total, setTotal] = useState(0);
    const [currency, setCurrency] = useState('$');

    const [isShowPopup, togglePopup] = useState(false);
    useEffect(() => {
        if(!_.isEmpty(cartItems)){
            const [currency, total] = calcTotal(cartItems);
            setCurrency(currency);
            setTotal(total);
        }
    }, [cartItems]);

    if (!_.isEmpty(cartItems)) {
        return (
            <div className='cart-button-div'>
                <button onClick={() => togglePopup(!isShowPopup)}>
                    <FontAwesomeIcon icon={['fa', 'cart-plus']}/>
                    <p className='number-items'>{cartItems.length <= 9 ? cartItems.length: '9+' }</p>
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