import React, {useState} from "react";
import Register from "../components/Register";
import AuthPage from "../components/common/AuthPage";

const RegisterPage = () => {
    const [ring, allowRing] = useState(false);
    return (
        <AuthPage ring={ring}>
            <Register onError={(isError) => {allowRing(isError)}}/>
        </AuthPage>
    )
};

export default RegisterPage;