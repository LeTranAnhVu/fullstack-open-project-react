import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {useLocation} from 'react-router-dom'
import BubbleButton from "./common/BubbleButton";
import './Login.scss';
import InputGroup from "./common/InputGroup";
import Divide from "./common/Divide";
import AuthApi from "../apis/AuthApi";
import {updateCurrentUser} from "../actions";
import history from "../helpers/history";
import useQueryParser from "../hooks/useQueryParser";

const Login = ({onError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const queries = useQueryParser();
    const onLogin = (e) => {
        e.preventDefault();
        onError(false);
        AuthApi.loginApi({username, password})
            .then((data) => {
                // update user info
                onError(false);
                dispatch(updateCurrentUser(data.user));
                if (queries && queries.redirectUrl) {
                    history.push(queries.redirectUrl)
                } else {
                    history.push('/restaurants')
                }
            })
            .catch((err) => {
                let resData = err.response.data;
                setErrorMessage('* ' + resData.message);
                onError(true);
            })
    };
    const onUpdateValue = (type, value) => {
        switch (type) {
            case 'username': {
                setUsername(value);
                break;
            }
            case 'password': {
                setPassword(value);
                break;
            }
            default: {
                break;
            }
        }
    };
    return (
        <div className='login-div'>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <Divide color='blue' weight={2}/>
            <form className='app-form'>
                <InputGroup onUpdateValue={onUpdateValue} label={'Username'} type={'text'} id={'username'}
                            name={'username'} placeholder={'Your username'}/>
                <InputGroup onUpdateValue={onUpdateValue} label={'Password'} type={'password'} id={'password'}
                            name={'password'} placeholder={'Your password'}/>
                {
                    errorMessage ?
                        <p className='error-message'>{errorMessage}</p>
                        : null
                }
                <BubbleButton style={{display: 'block', margin: '20px auto 0', padding: '8px 30px'}}
                              onClick={onLogin}>Enter</BubbleButton>
            </form>
        </div>
    )
};

export default Login;