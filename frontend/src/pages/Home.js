import React from 'react';
import GlobalStyles from '../Global/GlobalStyles';
import Button from '../components/Button';
//import {useNavigate} from 'react-router-dom';

const Home = () => {
    //const navigate = useNavigate();
    return (
        <div style={GlobalStyles.contentContainer}>
            <div>
                {/*Carousel */}
            </div>
            <div>
                <div>Sample Full Stack </div>
                This is a Sample Full Stack Project that I made to show recruiters that 
                I understand Full Stack Development and am able to construct a modern website
            </div>
            {/*<Button additionalButtonStyles={{color: "blue"}} toggle={() => navigate("/Auth")}></Button>*/}
        </div>
    );
}

export default Home;