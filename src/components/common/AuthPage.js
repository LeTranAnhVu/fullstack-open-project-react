import React from "react";
import './AuthPage.scss';
import {Container} from "reactstrap";

const AuthPage = ({children}) => {
    return (
        <div className='auth-page'>
            <div className='auth-form-wrapper'>
            {children}
            </div>
        </div>
    )
};

export default AuthPage;