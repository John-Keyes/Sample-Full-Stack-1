import React, {useState} from 'react';
//import {Label, Input, FormGroup} from 'reactstrap';
import StudentCard from '../components/studentcard.js';
import CustomTextInput from '../components/CustomTextInput.js';
import FlatList from 'flatlist-react';
import GlobalStyles from '../Styles/GlobalStyles.js';
import Button from '../components/Button.js';
//import {APICall} from '../Global/APICall.js';
//import {useQuery} from 'react-query';
import "../Styles/pages/StudentList.scss";
import "../Styles/General.scss";

const StudentList = ({classInfo}) => {
    const [name, setName] = useState("");
    const [conditionType, setConditionType] = useState(0);
    //const [tag, setTag] = useState("");

    const FilterCondition = (studentInfo) => {
        let fullName = `${studentInfo.firstName} ${studentInfo.lastName}`;
        if(conditionType == 0) { 
            return fullName.toLowerCase().includes(name.toLowerCase); //not case-sensitive
        }
        return fullName.includes(name); //case-sensitive
    }

    
    
    return (
        <div style={GlobalStyles.contentContainer}>
            <CustomTextInput 
                inputType={"text"} 
                borderType={'r'} 
                id={"namesearch"} 
                placeholder={"Search by name"} 
                value={name} 
                setValue={setName} 
                right={({conditionType, setConditionType}) => {
                    const SwitchConditionType = e => {
                        if(conditionType == 0) {
                            e.currentTarget.getAttribute("StudentListSearchButton1").style.backgroundColor = "#8CA6A2";
                            e.currentTarget.getAttribute("StudentListSearchButton2").style.backgroundColor = "#333";
                            setConditionType(1);
                            return;
                        }
                        e.currentTarget.getAttribute("StudentListSearchButton1").style.backgroundColor = "#333";
                        e.currentTarget.getAttribute("StudentListSearchButton2").style.backgroundColor = "#8CA6A2";
                        setConditionType(0);
                    }
                    return (
                        <div class="flexRow">
                            {/*Add Tooltip component */}
                            <Button data-key="StudentListSearchButton1" toggle={() => SwitchConditionType}><span className="buttonText">aA</span></Button>
                            <Button data-key="StudentListSearchButton2" toggle={() => SwitchConditionType}><span className="buttonText" >aa</span></Button>
                        </div>
                    );
                }}
            />
            {/*<CustomTextInput borderType={'r'} id={"tagsearch"} placeholder={"Search by tag"} value={tag} setValue={setTag}/>*/}
            <div style={GlobalStyles.listView}>
                {/*classInfo.filter(studentInfo => FilterCondition(studentInfo)).map(studentInfo => {
                    return <StudentCard key={studentInfo.id} studentInfo={studentInfo}/>;
                })*/}
                <FlatList
                    list={classInfo.filter(studentInfo => FilterCondition(studentInfo))}
                    renderItem={({studentInfo}) => <StudentCard key={studentInfo.id} studentInfo={studentInfo}/>}
                    renderWhenEmpty={() => <div>No results.</div>}
                    //sortBy={}
                    //groupBy={}
                />
            </div>
        </div>
    );
}

export default StudentList;
