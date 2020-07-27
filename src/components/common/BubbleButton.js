import React from "react";
import './BubbleButton.scss';

const BubbleButton = ({color, children, onClick, isDisabled, style, ...attr}) => {
    return (<button {...attr} style={style} onClick={onClick} className={`bubble-button ${isDisabled ? 'disabled': ''} ${ color ? color : 'blue'}`}>
        {children}</button>)
}

export default BubbleButton;
