import React from 'react';
import "../Styles/pages/Home.css";
import LogoShape from '../images/logoshape.png';
//import {useNavigate} from 'react-router-dom';

const Home = () => {
    //const navigate = useNavigate();
    return (
        <div style={{fontWeight: "bold"}}>
            <div id="welcomeSection">
                    <div>
                        <div className="title" style={{color: "#A4747F"}}>Sample</div>
                        <div className="title" style={{color: "#5E718C"}}>Full</div>
                        <div className="title" style={{color: "#8CA6A2"}}>Stack</div>
                    </div>
                    <div id="linkContainer">
                        <div style={{marginBottom: "5%"}}>The first (and maybe only) version</div>
                        <div style={{marginBottom: "5%"}}>that will be available to the public.</div>
                        <div style={{marginBottom: "5%"}}>For more information check the</div>
                        <div><a style={{color: "#5E718C"}} href="#aboutTitle">"About"</a> and <a style={{color: "#A4747F"}} href="#contactTitle">"Contacts"</a> section.</div>
                    </div>
            </div>
            <div id="aboutSection">
                <div id="aboutTitle">About this Project</div>
                <div id="aboutPara">
                    <div>This is a Sample Full Stack Project that I made to show recruiters and peers that</div>
                    <div>I understand Full Stack Development and am able to construct a website.</div>
                    <div>I know that this page lacks some background art, but I am saving the cool stuff for</div>
                    <div>other projects, thank you for running this.</div>
                </div>
            </div>
            <div id="contactSection">
                <div id="contactTitle">Contact Me</div>
                <div id="contactPara">
                    <div style={{marginBottom: "1%"}}>If you would like to contact me or have any suggestions,</div>
                    <div>this is where you can reach me,</div>
                    <div style={{marginBottom: "1%"}}>you can email me <a href="mailto:johnschool432@gmail.com" style={{color: "#A4747F", textDecoration: "none"}}>johnschool432@gmail.com</a>,</div>
                    <div>or message me on <a href="https://github.com/John-Keyes" style={{color: "#5E718C", textDecoration: "none"}}>Github</a>.</div>
                </div>
            </div>
        </div>
    );
}

export default Home;
/*
const styles = {
    title: {
        fontSize: "6vw", 
    
    },
    welcomeSection: {
        backgroundColor: "#444",
        //backgroundImage: `url(${LogoShape})`,
        width: "100%",
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-around",
        paddingTop: "5%",
        paddingBottom: "5%"
    },
    link: {
        textDecoration: "none",
        fontSize: "3vw",
        marginTop: "4.5%"
    },
    aboutTitle: {
        color: "#A4747F", 
        fontSize: "2.5em",
        textAlign: "center"
    },
    aboutPara: {
        fontSize: "1.5em"
    },
    contactTitle: {
        color: "#8CA6A2", 
        fontSize: "2.5em",
        textAlign: "center"
    },
    contactPara: {
        fontSize: "1.5em",
        marginLeft: "25%",
        marginRight: "25%"
    },
    aboutSection: {
        height: "50%",
        backgroundColor: "#fff",
    },
    contactSection: {
        height: "50%",
        backgroundColor: "#333",
    }
}
*/