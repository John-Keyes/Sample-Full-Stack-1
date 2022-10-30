import React, {useState} from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Auth = () => {
    const [activeTab, setActiveTab] = useState(true);
    const [authTabColor1, setAuthTabColor1] = useState("");
    const [authTabColor2, setAuthTabColor2] = useState("");

    return (
        <div style={styles.authContainer}>
            <table style={styles.tableFix}>
                <tr>
                    <td><div style={{...styles.tabp, borderBottom: `2px solid ${authTabColor1}`, color: authTabColor1}} onClick={() => {setActiveTab(true); setAuthTabColor1("#999"); setAuthTabColor2("#fff");}}>Log In</div></td>
                    <td><div style={{...styles.tabp, borderBottom: `2px solid ${authTabColor2}`, color: authTabColor2}} onClick={() => {setActiveTab(false); setAuthTabColor1("#fff"); setAuthTabColor2("#999");}}>Register</div></td>
                </tr>
            </table>
            {activeTab ? <Login /> : <Register />}
        </div>
    );
}

export default Auth;

const styles = {
    tabp: {
        padding: "0.5em",
        textAlign: "center"
    },
    authContainer: {
        borderRadius: "1em",
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: "#333",
        margin: "2.5%"
    },
    tableFix: {
        marginBottom: "2%",
        tableLayout: "fixed",
        width: "100%"
    }
}