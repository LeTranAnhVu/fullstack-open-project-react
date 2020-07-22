import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './CloseButton.scss'

const CloseButton = ({onAction, width = 23, height= null}) => {
    return (<button style={{width: width, height: height ? height : width}} onClick={onAction} className='close-button'><FontAwesomeIcon icon={["fa", "minus"]}/></button>)
}

export default CloseButton;
