import React from "react";
import _ from 'lodash';
import Divide from "./Divide";
import history from "../../helpers/history";
import './UserPopup.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {clearAllData} from "../../actions";
import Button from "reactstrap/es/Button";
import BubbleButton from "./BubbleButton";
import AuthApi from "../../apis/AuthApi";
import UserPopupItem from "./UserPopupItem";

const UserPopup = ({userInfo, top, right, width = '100%', onClose}) => {
    const dispatch = useDispatch();

    const closeAfter = (fn) => {
        return () => {
            fn();
            onClose()
        }
    };

    const onLogout = () => {
        AuthApi.logoutApi()
            .then((res) => {
                dispatch(clearAllData());
                onClose();
                history.push('/');
            }).catch((error) => {
            console.error(error)
        })
    };
    return (
        <div style={{width: width, top: top, right: right}} className='user-popup'>
            <div className='list-item'>
                <UserPopupItem onClick={null} icon='user' content={userInfo.username}/>
                <Divide/>
                <UserPopupItem onClick={closeAfter(() => history.push('/checkout'))} icon='cart-plus'
                               content='Your cart'/>
                <Divide/>
                <UserPopupItem onClick={closeAfter(() => history.push('/orders'))} icon='shopping-bag' content='Your orders'/>
                <Divide/>
                <UserPopupItem onClick={null} icon='cog' content='Edit your info'/>
                <Divide/>
            </div>
            <BubbleButton color='red' style={{display: 'block', margin: 'auto', padding: '5px', width: '100%'}}
                          onClick={onLogout}>
                <FontAwesomeIcon icon={['fa', 'sign-out-alt']}/>
                <span style={{marginLeft: '2px'}}>Log out</span>
            </BubbleButton>
        </div>
    );
};

export default UserPopup;