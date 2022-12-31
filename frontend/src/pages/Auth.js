import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import  "../Styles/pages/Auth.scss";

const Auth = () => {
    const navigate = useNavigate();
    const [authTabColor1, setAuthTabColor1] = useState("#fff");
    const [authTabColor2, setAuthTabColor2] = useState("#999");
    const [currentTab, setCurrentTab] = useState("Login");

    useEffect(() => {
        navigate(currentTab);

    }
    , [navigate, currentTab]);

    const SwitchTabTo1 = () => {
        setAuthTabColor1("#fff"); 
        setAuthTabColor2("#999");
        setCurrentTab("Login"); 
    };

    const SwitchTabTo2 = () => {
        setAuthTabColor1("#999"); 
        setAuthTabColor2("#fff");
        setCurrentTab("Register"); 
    };

    return (
        <div stlye={{backgroundColor: "#000", borderColor: "#000", borderWidth: 10}}>
            <div id="authContainer">
                <table className="tableFix">
                    <tbody>
                        <tr>
                            {/*<td><div id="tabp1" style={{borderBottom: `2px solid ${authTabColor1}`, color: authTabColor1}} onClick={() => SwitchTabTo1()}>Log In</div></td>
                            <td><div id="tabp2" style={{borderBottom: `2px solid ${authTabColor2}`, color: authTabColor2}} onClick={() => SwitchTabTo2()}>Register</div></td>*/}
                            <td><div id="tabp1" onClick={() => setCurrentTab("Login")}>Log In</div></td>
                            <td><div id="tabp2" onClick={() => setCurrentTab("Register")}>Register</div></td>
                        </tr>
                    </tbody>
                </table>
                <Outlet/>
            </div>
        </div>
    );
}

export default Auth;
