import React, {useState} from 'react';
import {AddFeedBack} from '../Global/Feedback';
import CustomTextInput from './CustomTextInput';
import Button from './Button';
import {UpdateProfile} from '../Redux/actions';

const ProfileSettings = () => {
    const [city, setCity] = useState("");
    const [company, setCompany] = useState("");
    const [pic, setPic] = useState("");
    const [picFormat, setPicFormat] = useState(true);
    const [skills, setSkills] = useState([]);
    const [currentSkill, setCurrentSkill] = useState("");
    const [grades, setGrades] = useState([]);
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
                id={"register_City"}
                title={"City"} 
                placeholder={"Your City"}
                value={city} 
                setValue={setCity}
            />
            <CustomTextInput 
                borderType={'u'} 
                id={"register_Company"}
                title={"Company"} 
                placeholder={"Your Company"}
                value={company} 
                setValue={setCompany}
            />
            <CustomTextInput 
                borderType={'u'} 
                inputType={picFormat ? "url" : "file"}
                id={"register_pic"}
                title={"Your profile picture"} 
                placeholder={"Paste a URL or "}
                value={pic} 
                setValue={setPic}
                Condition={(val) => val.length > 0 }
                right={() => <div style={{display: "flex", flexDirection: "row"}}><Button onClick={() => setPicFormat(true)}><span className="buttonText">URL</span></Button><Button onClick={() => setPicFormat(false)}><span className="buttonText">File Path</span></Button></div>}
            />
            <CustomTextInput
                borderType={'u'} 
                id={"register_skills"}
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
                id={"register_grades"}
                title={"Grades"} 
                placeholder={"Your Grades"}
                value={currentGrade} 
                setValue={setCurrentGrade}
                Condition={(val) => val.length > 0 ? AddFeedBack("", errors?.grades) : AddFeedBack("You must enter a skill before submitting.", errors?.grades)}
                left={grades.map(grade => <Button><span className="buttonText">{grade}</span></Button>)}
                right={() => <svg xmlns="http://www.w3.org/2000/svg" onClick={AddGrade()} height="20" width="20"><path d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"/></svg>}
            />
            <Button additionalButtonStyles={{backgroundColor: "blue"}} toggle={() => UpdateProfile({city: city, company: company, grades: grades, skills: skills, pic: pic}, setErrors)}>
                <span className="buttonText">Save</span>
            </Button>
        </div>
        
    );
}

export default ProfileSettings;