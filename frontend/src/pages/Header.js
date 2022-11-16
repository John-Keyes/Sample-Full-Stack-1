import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom'; 
import Logo from '../images/logo.png';
import "../Styles/pages/Header.scss";
import {useSelector} from 'react-redux';
import {getToken} from '../Global/Token';

const Header = () => {
    const token = getToken();
    const authInfo = useSelector(state => state.auth.authInfo);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    
    //onMouseEnter={e => e.currentTarget.style.color = "rgb(164, 116, 127)"} onMouseLeave={e => e.currentTarget.style.color = "rgb(255, 255, 255)"}
    //onMouseEnter={e => e.currentTarget.style.color = "rgb(140, 166, 162)"} onMouseLeave={e => e.currentTarget.style.color = "rgb(255, 255, 255)"}
    return (
        <>
            <nav id="nav">
                <img width="25%" alt="Logo made on wix.com" src={Logo}/>
                {/*rgb(164, 116, 127) = #A4747F  rgb(140, 166, 162) = #8CA6A2*/}
                <Link className="routeType1" to="/">Home</Link>
                {/*token ?
					<div>
						{isAdmin == 'T' ?
						<Link to="/StudentList" element = {<StudentList classInfo={classInfo}/>}/>
						:<Link to="/Profile" element = {Profile}/>
						}
					</div>
					: <Link to="/Auth" element = {Auth}/>
				*/}
                <Link className="routeType2" to="/Profile">Profile</Link>
                <Link className="routeType1" to="/StudentList">StudentList</Link>
				<Link className="routeType2" to="/Auth">Sign In</Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;