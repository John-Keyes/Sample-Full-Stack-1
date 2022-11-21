import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import  "../Styles/pages/Auth.scss";

const Auth = () => {
    const navigate = useNavigate();
    const [authTabColor1, setAuthTabColor1] = useState("#fff");
    const [authTabColor2, setAuthTabColor2] = useState("#999");

    const SwitchTabFrom1 = () => {
        //navigate(-1); 
        navigate("Login"); 
        setAuthTabColor1("#999"); 
        setAuthTabColor2("#fff");
    };

    const SwitchTabFrom2 = () => {
        //navigate(-1); 
        navigate("Register"); 
        setAuthTabColor1("#fff"); 
        setAuthTabColor2("#999");
    };

    return (
        <div id="authContainer">
            <table className="tableFix">
                <tbody>
                    <tr>
                        <td><div id="tabp1" style={{borderBottom: `2px solid ${authTabColor1}`, color: authTabColor1}} onClick={() => SwitchTabFrom1()}>Log In</div></td>
                        <td><div id="tabp2" style={{borderBottom: `2px solid ${authTabColor2}`, color: authTabColor2}} onClick={() => SwitchTabFrom2()}>Register</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Auth;
