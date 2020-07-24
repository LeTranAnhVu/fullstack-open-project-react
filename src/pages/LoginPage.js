import React from "react";
import {Container} from "reactstrap";
import AuthPage from "../components/common/AuthPage";
import Login from '../components/Login';

const LoginPage= () => {
    return (
        <AuthPage>
            <Login/>
        </AuthPage>
    )
};

export default LoginPage;