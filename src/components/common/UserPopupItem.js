import React from "react";
import './UserPopup.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "reactstrap/es/Button";

const UserPopupItem = ({onClick, icon, content}) => {
    return (
        <div className='item'>
            <Button onClick={onClick} style={{padding: 0, color: '#343a40'}} color={'link'}>
                <FontAwesomeIcon icon={['fa', icon]}/>
                <span>{content}</span>
            </Button>
        </div>
    );
};

export default UserPopupItem;