import React from "react";
import './BubbleButton.scss';

const BubbleButton = ({children, onClick, style}) => {
    return (<button style={style} onClick={onClick} className='bubble-button'>
        {children}</button>)
}

export default BubbleButton;
