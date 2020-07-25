import React from "react";
import './BubbleButton.scss';

const BubbleButton = ({children, onClick, isDisabled, style, ...attr}) => {
    return (<button {...attr} style={style} onClick={onClick} className={`bubble-button ${isDisabled ? 'disabled': ''}`}>
        {children}</button>)
}

export default BubbleButton;
