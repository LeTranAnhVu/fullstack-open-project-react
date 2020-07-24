import React from "react";
import BubbleButton from "./common/BubbleButton";
import './Login.scss';

const Login = () => {
    const onLogin = () => {
        console.log('login');
    };
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Login</h1>
            <form className='app-form'>
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='LeTranAnhVu...'/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='password...'/>
                </div>
                <BubbleButton onClick={onLogin}>Login</BubbleButton>
            </form>
        </div>
    )
};

export default Login;