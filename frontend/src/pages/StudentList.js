import React, {useState} from 'react';
//import {Label, Input, FormGroup} from 'reactstrap';
import StudentCard from '../components/studentcard.js';
import CustomTextInput from '../components/CustomTextInput.js';
import FlatList from 'flatlist-react';
import GlobalStyles from '../Styles/GlobalStyles.js';
//import {APICall} from '../Global/APICall.js';
//import {useQuery} from 'react-query';


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
            <CustomTextInput inputType={"text"} borderType={'r'} id={"namesearch"} placeholder={"Search by name"} value={name} setValue={setName}/>
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
