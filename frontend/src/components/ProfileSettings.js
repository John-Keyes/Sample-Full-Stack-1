import React, {useState} from 'react';
import {AddFeedBack} from '../Global/Feedback';
import { Country, State, City }  from 'country-state-city';
import CustomTextInput from './CustomTextInput';
import Button from './Button';
import {SaveProfile} from '../Redux/actions';
import store from '../Redux/store';

const ProfileSettings = () => {
    const payload = store.getState().payload;
    const [countries, setCountries] = useState(Country.getAllCountries());
    const [states, setStates] = useState(State.getAllStates());
    const [cities, setCities] = useState(City.getAllCities());
    const [currentCountry, setCurrentCountry] = useState(payload.country);
    const [currentState, setCurrentState] = useState(payload.state);
    const [currentCity, setCurrentCity] = useState(payload.city);
    const [company, setCompany] = useState(payload.company);
    const [pic, setPic] = useState(payload.pic);
    const [picFormat, setPicFormat] = useState(true);
    const [skills, setSkills] = useState(payload.skills);
    const [currentSkill, setCurrentSkill] = useState("");
    const [grades, setGrades] = useState(payload.grades);
    const [currentGrade, setCurrentGrade] = useState("");
    const [errors, setErrors] = useState({});

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
                borderType={'u'} 
                id={"update_City"}
                title={"City"} 
                placeholder={"Your City"}
                value={currentCity} 
                setValue={setCurrentCity}
            />
            <CustomTextInput 
                borderType={'u'} 
                id={"update_Company"}
                title={"Company"} 
                placeholder={"Your Company"}
                value={company} 
                setValue={setCompany}
            />
            <CustomTextInput 
                borderType={'u'} 
                inputType={picFormat ? "url" : "file"}
                id={"update_pic"}
                title={"Your profile picture"} 
                placeholder={"Paste a URL or "}
                value={pic} 
                setValue={setPic}
                Condition={(val) => val.length > 0 }
                right={() => <div style={{display: "flex", flexDirection: "row"}}><Button onClick={() => setPicFormat(true)}><span className="buttonText">URL</span></Button><Button onClick={() => setPicFormat(false)}><span className="buttonText">File Path</span></Button></div>}
            />
            <CustomTextInput
                borderType={'u'} 
                id={"update_skills"}
                title={"Skills"} 
                placeholder={"Your Skills"}
                value={currentSkill} 
                setValue={setCurrentSkill}
                Condition={(val) => val.length > 0 ? AddFeedBack("", errors?.skills) : AddFeedBack("You must enter a skill before submitting.", errors?.skills)}
                left={skills.map(skill => <Button><span className="buttonText">{skill}</span></Button>)}
                right={() => <svg xmlns="http://www.w3.org/2000/svg" onClick={AddSkill()} height="20" width="20"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>}
            />
            <CustomTextInput
                borderType={'u'} 
                id={"update_grades"}
                title={"Grades"} 
                placeholder={"Your Grades"}
                value={currentGrade} 
                setValue={setCurrentGrade}
                Condition={(val) => val.length > 0 ? AddFeedBack("", errors?.grades) : AddFeedBack("You must enter a skill before submitting.", errors?.grades)}
                left={grades.map(grade => <Button><span className="buttonText">{grade}</span></Button>)}
                right={() => <svg xmlns="http://www.w3.org/2000/svg" onClick={AddGrade()} height="20" width="20"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>}
            />
            <Button additionalButtonStyles={{backgroundColor: "blue"}} toggle={() => SaveProfile("PUT", `update/${payload.studentID}`, {country: currentCountry, state: currentState, city: currentCity, company: company, grades: grades, skills: skills}, setErrors)}>
                <span className="buttonText">Save</span>
            </Button>
        </div>
        
    );
}

export default ProfileSettings;