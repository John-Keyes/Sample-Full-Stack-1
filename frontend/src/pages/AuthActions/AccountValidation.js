import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

const AccountValidation = () => {
    const navigate = useNavigate();
    useEffect(() => navigate("Login"), [navigate]);
    return (
        <div>
            <div>Account Validated</div>
            <div>Click <a href="Login">here</a> if you need to be redirected home.</div>
        </div>
    );
}

export default AccountValidation;