import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom'; 
import Logo from '../images/logo.png';
import "../Styles/pages/Header.scss";
import {useDispatch, useSelector} from 'react-redux';
import {getToken} from '../Global/Token.js';
import {LogOut} from '../Redux/reducer.js';

const Header = () => {
    const token = getToken();
    const dispatch = useDispatch();
    const authInfo = useSelector(state => state.auth.authInfo);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    
    //onMouseEnter={e => e.currentTarget.style.color = "rgb(164, 116, 127)"} onMouseLeave={e => e.currentTarget.style.color = "rgb(255, 255, 255)"}
    //onMouseEnter={e => e.currentTarget.style.color = "rgb(140, 166, 162)"} onMouseLeave={e => e.currentTarget.style.color = "rgb(255, 255, 255)"}
    return (
        <>
            <nav id="nav">
                <img width="25%" alt="" src={Logo}/>
                {/*rgb(164, 116, 127) = #A4747F  rgb(140, 166, 162) = #8CA6A2*/}
                <Link className="routeType1" to="/">Home</Link>
                <Link className="routeType2" to="/StudentList">StudentList</Link>
				{!token ? 
                    <Link className="routeType1" to="/Auth">Sign In</Link> : 
                    <div id="headerDropDownContainer">
                        <div id="headerDropDownTitle" onClick={() => setDropDownOpen(!dropDownOpen)}>{authInfo?.firstName} v (Fix icon sizing)</div>
                        {/*authInfo?.firstName ?*/}
                        <div id="headerDropDownBody">
                            <Link className="routeType2" to="/Profile">Profile</Link>
                            <div className="routeType1" onClick={() => dispatch(LogOut())}>Sign Out</div>
                        </div>
                        {/*}: null*/}
                    </div>
                }
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;