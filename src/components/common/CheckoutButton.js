import React from "react";
import './CheckoutButton.scss';

const CheckoutButton = ({onAction, style}) => {
    return (<button style={style} onClick={onAction} className='checkout-button'>
        Order</button>)
}

export default CheckoutButton;
