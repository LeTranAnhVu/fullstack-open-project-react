import React, {useState} from "react";

import BubbleButton from "./common/BubbleButton";
import './LoginAndLogout.scss';
import InputGroup from "./common/InputGroup";
import Divide from "./common/Divide";
import AuthApi from "../apis/AuthApi";
import history from "../helpers/history";
import {getQueryString} from "../helpers/urlHelpers";
import {Button} from 'reactstrap'

const Register = ({onError}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [confirmPassword, setConfirmPassword] = useState('');


    // const queries = useQueryParser();
    const onSignup = (e) => {
        e.preventDefault();
        onError(false);
        AuthApi.register({username, password, confirmPassword})
            .then((data) => {
                // update user info
                onError(false);
                let current_queryString = getQueryString();
                history.push('/login' + current_queryString);
            })
            .catch((err) => {
                let resData = err.response.data;
                setErrors(resData.errors || {});
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

            case 'confirm_password': {
                setConfirmPassword(value);
                break;
            }
            default: {
                break;
            }
        }
    };
    return (
        <div className='auth-div'>
            <h1 className={'app-special-h1'} style={{textAlign: 'center', color: '#228be5'}}>Register</h1>
            <Divide color='blue' weight={2}/>
            <form className='app-form'>
                <InputGroup errors={errors['username']} onUpdateValue={onUpdateValue} label={'Username'} type={'text'}
                            id={'username'}
                            name={'username'} placeholder={'your_user_name'}/>
                <InputGroup errors={errors['password']} onUpdateValue={onUpdateValue} label={'Password'}
                            type={'password'} id={'password'}
                            name={'password'} placeholder={'********'}/>
                <InputGroup errors={errors['confirm_password']} onUpdateValue={onUpdateValue} label={'Confirm password'}
                            type={'password'}
                            id={'confirm_password'}
                            name={'confirm_password'} placeholder={'********'}/>
                <Divide/>
                <div className="after-form">
                    <BubbleButton style={{display: 'block', margin: '20px auto 0', padding: '8px 30px'}}
                                  onClick={onSignup}>Sign up</BubbleButton>
                    <button onClick={() => history.push('/login' + getQueryString())} className='sub-button'>
                        Have an account yet?
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Register;