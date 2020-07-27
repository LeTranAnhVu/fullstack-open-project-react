import React, {useState} from "react";
import {useDispatch} from "react-redux";

import BubbleButton from "./common/BubbleButton";
import './LoginAndLogout.scss';
import InputGroup from "./common/InputGroup";
import Divide from "./common/Divide";
import AuthApi from "../apis/AuthApi";
import {updateCurrentUser} from "../actions";
import history from "../helpers/history";
import useQueryParser from "../hooks/useQueryParser";
import {getQueryString} from "../helpers/urlHelpers";

const Login = ({onError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const queries = useQueryParser();
    const onLogin = (e) => {
        e.preventDefault();
        onError(false);
        AuthApi.login({username, password})
            .then((data) => {
                // update user info
                onError(false);
                dispatch(updateCurrentUser(data.user));
                if (queries && queries.redirect_url) {
                    history.push(queries.redirect_url)
                } else {
                    history.push('/')
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
        <div className='auth-div'>
            <h1 className={'app-special-h1'} style={{textAlign: 'center', color: '#228be5'}}>Login</h1>
            <Divide weight={2}/>
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
                <Divide/>
                <div className="after-form">
                    <BubbleButton style={{display: 'block', margin: '20px auto 0', padding: '8px 30px'}}
                                  onClick={onLogin}>Sign in</BubbleButton>
                    <button onClick={() => history.push('/register' + getQueryString())} className='sub-button'>
                        Create new account?
                    </button>
                </div>

            </form>
        </div>
    )
};

export default Login;