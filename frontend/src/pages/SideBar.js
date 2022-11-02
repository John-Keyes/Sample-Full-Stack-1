import React, {useState} from 'react';
import {Outlet, Link} from 'react-router-dom'; 
import Button from '../components/Button';
//import store from './store';
//import {getToken} from '../Global/Token';

const SideBar = () => {
    //const token = getToken();
	//const isAdmin = store.getState().payload.isAdmin;
    const [activeScreen, setActiveScreen] = useState("Home");
    const [dropDownOpen, setDropDownOpen] = useState(false);
    return (
        <>
            <nav style = {styles.nav}>
                <Button additionalButtonStyles={styles.additionalButtonStyles} toggle={() => setDropDownOpen(!dropDownOpen)}><span className="buttonText">{activeScreen}</span></Button>
                <section style={{...styles.dropdownContainer, display: dropDownOpen ? "flex" : "none"}}>
                    <Link to="/" onClick={() => setActiveScreen("Home")}>Home</Link>
                    {/*token ?
						<div>
							{isAdmin == 'T' ?
							<Link to="/Filters" element = {<Filters classInfo={classInfo}/>}/>
							:<Link to="/Profile" element = {Profile}/>
							}
						</div>
						: <Link to="/Auth" element = {Auth}/>
					*/}
                    <Link to="/Profile" onClick={() => setActiveScreen("Profile")}>Profile</Link>
                    <Link to="/Filters" onClick={() => setActiveScreen("Filters")}>Filters</Link>
					<Link to="/Auth" onClick={() => setActiveScreen("Auth")}>Auth</Link>
					<Link to="/NoPage" onClick={() => setActiveScreen("NoPage")}>NoPage</Link>
                </section>
                <section style = {styles.logo}>
                    {/*<img style = {styles.img} alt="logo" src={Logo} />*/}
                    Sample Full Stack 1
                </section>
            </nav>
            <Outlet/>
        </>
    );
}

export default SideBar;

const styles = {
	nav: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: "#040747",
		borderBottom: "0.15em solid #fff",
		fontWeight: "300"
	},
    logo: {
		display: "flex",
		justifyContent: "center",
		marginTop: "20px",
		marginBottom: "10px"
	},
    dropdownContainer: {
        flexDirection: "column",
        border: "0.15em solid #fff",
    },
    additionalButtonStyles: {
        padding: "0.5em",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "0.25em"
    }

}