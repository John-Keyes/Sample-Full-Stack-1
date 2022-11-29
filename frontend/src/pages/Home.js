import React from 'react';
import "../Styles/pages/Home.scss";
import "../Styles/General.scss";
import Button from '../components/Button';
//import LogoShape from '../images/logoshape.png';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="homeWrapper">
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
                        <div><a className="hoverLink1" href="#aboutTitle">About</a> and <a className="hoverLink3" href="#contactTitle">Contacts</a> section.</div>
                    </div>
            </div>
            <div id="aboutSection">
                <div id="aboutTitle">About this Project</div>
                <div className="aboutContent">
                    <div className="aboutPara">
                        This is a Sample Full Stack Project that I made to show people that
                        I understand Full Stack Development and am capable of constructing a website.
                    </div>
                    <div className="aboutPara">
                        I know that this page lacks cool art, but this is more about the functionality.
                        Also, I don't want to use potential logos until the future.
                    </div>
                    <div className="aboutPara">
                        If you want to try my user services, please click the "Join" button.
                    </div>
                </div>
                <Button additionalClassNames={"joinButton"} toggle={() => navigate("/Auth")} text={<span className="buttonText">Join</span>}/>
            </div>
            <div id="contactSection">
                <div id="contactTitle">Contact Me</div>
                <div id="contactPara">
                    <a href="mailto:johnschool432@gmail.com"><svg className="hoverLink1" xmlns="http://www.w3.org/2000/svg"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1 17-11.15V11L24 21.9 7 11v2.75Z"/></svg></a>
                    <a href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" target="_blank" rel="noreferrer" ><svg className="hoverLink2" xmlns="http://www.w3.org/2000/svg"><path d="M7 42q-1.2 0-2.1-.9Q4 40.2 4 39V15q0-1.2.9-2.1.9-.9 2.1-.9h9V7q0-1.2.9-2.1.9-.9 2.1-.9h10q1.2 0 2.1.9.9.9.9 2.1v5h9q1.2 0 2.1.9.9.9.9 2.1v24q0 1.2-.9 2.1-.9.9-2.1.9Zm12-30h10V7H19Z"/></svg></a>
                    <a href="https://github.com/John-Keyes" target="_blank" rel="noreferrer"><svg className="hoverLink3" xmlns="http://www.w3.org/2000/svg"><path d="M38.3 42q-2.05 0-3.575-1.225Q33.2 39.55 32.8 37.8H22.15q-3.3 0-5.475-2.175T14.5 30.15q0-3.3 2.175-5.475T22.15 22.5H26q2.05 0 3.35-1.3 1.3-1.3 1.3-3.35t-1.3-3.35q-1.3-1.3-3.35-1.3H15.2q-.45 1.75-1.95 2.975T9.7 17.4q-2.4 0-4.05-1.65T4 11.7q0-2.4 1.65-4.05T9.7 6q2.05 0 3.55 1.225T15.2 10.2H26q3.3 0 5.475 2.175t2.175 5.475q0 3.3-2.175 5.475T26 25.5h-3.85q-2.05 0-3.35 1.3-1.3 1.3-1.3 3.35t1.3 3.35q1.3 1.3 3.35 1.3H32.8q.45-1.75 1.95-2.975T38.3 30.6q2.4 0 4.05 1.65T44 36.3q0 2.4-1.65 4.05T38.3 42ZM9.7 14.4q1.15 0 1.925-.775.775-.775.775-1.925t-.775-1.925Q10.85 9 9.7 9t-1.925.775Q7 10.55 7 11.7t.775 1.925q.775.775 1.925.775Z"/></svg></a>
                </div>
            </div>
        </div>
    );
}

export default Home;