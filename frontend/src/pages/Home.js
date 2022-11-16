import React from 'react';
import "../Styles/pages/Home.scss";
import Button from '../components/Button';
//import LogoShape from '../images/logoshape.png';
//import {useNavigate} from 'react-router-dom';

const Home = () => {
    //const navigate = useNavigate();
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
                <div className="centerButton">
                    <Button additionalButtonStyles={{marginLeft: "40%", backgroundColor: "#5E718C", width: "20%", padding: "2%"}} toggle={() => window.location.href = "/Auth"} text={<span className="buttonText">Join</span>}/>
                </div>
            </div>
            <div id="contactSection">
                <div id="contactTitle">Contact Me</div>
                <div id="contactPara">
                    <div><a href="mailto:johnschool432@gmail.com" className="hoverLink1"><svg xmlns="http://www.w3.org/2000/svg" height="15%" width="15%"><path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm8-7 8-5V6l-8 5-8-5v2Z"/></svg></a></div>
                    <div><a href="https://www.linkedin.com/in/john-keyes-ba4a7820b/" className="hoverLink2"><svg xmlns="http://www.w3.org/2000/svg" height="15%" width="15%"><path d="M4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21Zm6-15h4V4h-4Z"/></svg></a></div>
                    <div><a href="https://github.com/John-Keyes" className="hoverLink3"><svg xmlns="http://www.w3.org/2000/svg" height="15%" width="15%"><path d="M19 21q-.975 0-1.75-.562-.775-.563-1.075-1.438H11q-1.65 0-2.825-1.175Q7 16.65 7 15q0-1.65 1.175-2.825Q9.35 11 11 11h2q.825 0 1.413-.588Q15 9.825 15 9t-.587-1.413Q13.825 7 13 7H7.825q-.325.875-1.087 1.438Q5.975 9 5 9q-1.25 0-2.125-.875T2 6q0-1.25.875-2.125T5 3q.975 0 1.738.562Q7.5 4.125 7.825 5H13q1.65 0 2.825 1.175Q17 7.35 17 9q0 1.65-1.175 2.825Q14.65 13 13 13h-2q-.825 0-1.412.587Q9 14.175 9 15q0 .825.588 1.413Q10.175 17 11 17h5.175q.325-.875 1.088-1.438Q18.025 15 19 15q1.25 0 2.125.875T22 18q0 1.25-.875 2.125T19 21ZM5 7q.425 0 .713-.287Q6 6.425 6 6t-.287-.713Q5.425 5 5 5t-.713.287Q4 5.575 4 6t.287.713Q4.575 7 5 7Z"/></svg></a></div>
                </div>
            </div>
        </div>
    );
}

export default Home;