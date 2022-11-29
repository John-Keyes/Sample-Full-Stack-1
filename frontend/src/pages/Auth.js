import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import  "../Styles/pages/Auth.scss";

const Auth = () => {
    const navigate = useNavigate();
    const [authTabColor1, setAuthTabColor1] = useState("#fff");
    const [authTabColor2, setAuthTabColor2] = useState("#999");
    const [currentTab, setCurrentTab] = useState("Login");

    useEffect(() => navigate(currentTab), [navigate, currentTab]);

    const SwitchTabFrom1 = () => {
        setAuthTabColor1("#fff"); 
        setAuthTabColor2("#999");
        setCurrentTab("Register"); 
    };

    const SwitchTabFrom2 = () => {
        setAuthTabColor1("#999"); 
        setAuthTabColor2("#fff");
        setCurrentTab("Login"); 
    };

    return (
        <div id="authContainer">
            <table className="tableFix">
                <tbody>
                    <tr>
                        <td><div className="tabp" style={{borderBottom: `2px solid ${authTabColor1}`, color: authTabColor1}} onClick={() => SwitchTabFrom1()}>Log In</div></td>
                        <td><div className="tabp" style={{borderBottom: `2px solid ${authTabColor2}`, color: authTabColor2}} onClick={() => SwitchTabFrom2()}>Register</div></td>
                    </tr>
                </tbody>
            </table>
            <Outlet/>
        </div>
    );
}

export default Auth;
