import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Country, State, City }  from 'country-state-city';
import CustomTextInput from './CustomTextInput';
import Button from './Button';
import {SaveProfile} from '../Redux/Auth/actions';
import {useNavigate} from 'react-router-dom';

const ProfileSettings = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {authInfo, isLoading} = useSelector(state => state.auth);
    const [countries, setCountries] = useState(Country.getAllCountries());
    const [states, setStates] = useState(State.getAllStates());
    const [cities, setCities] = useState(City.getAllCities());
    const [currentCountry, setCurrentCountry] = useState(authInfo?.country);
    const [currentState, setCurrentState] = useState(authInfo?.state);
    const [currentCity, setCurrentCity] = useState(authInfo?.city);
    const [company, setCompany] = useState(authInfo?.company);
    const [pic, setPic] = useState(authInfo?.pic);
    const [picFormat, setPicFormat] = useState(true);
    const [skills, setSkills] = useState(authInfo?.skills);
    const [currentSkill, setCurrentSkill] = useState("");
    const [grades, setGrades] = useState(authInfo?.grades);
    const [currentGrade, setCurrentGrade] = useState("");

    /*const ImageCondition = val => {
        if(picFormat) {
            try {
                let url = new URL(val);
            } catch(err) {
                AddFeedBack("Invalid URL", errors?.pic);
            }
            return;
        }
        let path;
        
    }*/

    const SubmitProfileSettings = () => {
        if(!isLoading) {
            dispatch(SaveProfile("PUT", `update/${authInfo.studentID}`, {country: currentCountry, state: currentState, city: currentCity, company: company, grades: grades, skills: skills}));
            navigate("/Profile");
        }
    }
    
    const AddSkill = () => {
        let tempArr = [...skills];
        tempArr.push(currentSkill);
        setSkills(tempArr);
        setCurrentSkill("");
    }

    const AddGrade = () => {
        let tempArr = [...grades];
        tempArr.push(parseInt(currentGrade));
        setGrades(tempArr);
        setCurrentGrade(null);
    }

    return (
        <div className="formContainer">
            <CustomTextInput 
                name={"country"}
                borderType={"underlineBorder"} 
                id={"update_Country"}
                title={"Country"} 
                placeholder={"Your Country"}
                value={currentCountry} 
                setValue={setCurrentCountry}
            />
            <CustomTextInput 
                name={"state"}
                borderType={"underlineBorder"} 
                id={"state"}
                title={"State"} 
                placeholder={"Your State"}
                value={currentState} 
                setValue={setCurrentState}
            />
            <CustomTextInput 
                name={"city"}
                borderType={"underlineBorder"} 
                id={"update_City"}
                title={"City"} 
                placeholder={"Your City"}
                value={currentCity} 
                setValue={setCurrentCity}
            />
            <CustomTextInput 
                name={"company"}
                borderType={"underlineBorder"} 
                id={"update_Company"}
                title={"Company"} 
                placeholder={"Your Company"}
                value={company} 
                setValue={setCompany}
            />
            <CustomTextInput 
                borderType={"underlineBorder"} 
                inputType={picFormat ? "url" : "file"}
                id={"update_pic"}
                title={"Your profile picture"} 
                placeholder={"Paste a URL or "}
                value={pic} 
                setValue={setPic}
                Condition={true} 
                right={
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <Button onClick={() => setPicFormat(true)}><span className="buttonText">URL</span></Button>
                                <Button onClick={() => setPicFormat(false)}><span className="buttonText">File Path</span></Button>
                            </div>
                }
            />
            <CustomTextInput
                borderType={"underlineBorder"} 
                id={"update_skills"}
                title={"Skills"} 
                placeholder={"Your Skills"}
                value={currentSkill} 
                setValue={setCurrentSkill}
                Condition={true}
                left={skills.map(skill => <Button><span className="buttonText">{skill}</span></Button>)}
                right={<svg xmlns="http://www.w3.org/2000/svg" onClick={AddSkill()} height="20" width="20"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>}
            />
            <CustomTextInput
                borderType={"underlineBorder"} 
                id={"update_grades"}
                title={"Grades"} 
                placeholder={"Your Grades"}
                value={currentGrade} 
                setValue={setCurrentGrade}
                Condition={true}
                left={grades.map(grade => <Button><span className="buttonText">{grade}</span></Button>)}
                right={<svg xmlns="http://www.w3.org/2000/svg" onClick={AddGrade()} height="20" width="20"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>}
            />
            <Button toggle={() => SubmitProfileSettings()}>
                <span className="buttonText">Save</span>
            </Button>
        </div>
        
    );
}

export default ProfileSettings;