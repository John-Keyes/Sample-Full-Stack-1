import React, {useState, useEffect} from 'react';
//import {Label, Input, FormGroup} from 'reactstrap';
import StudentCard from '../components/studentcard.js';
import CustomTextInput from '../components/CustomTextInput.js';
import FlatList from 'flatlist-react';
import {GlobalStyles} from '../Global/GlobalStyles.js';
//import {APICall} from '../Global/APICall.js';
//import {useQuery} from 'react-query';


const Filters = () => {
    const [name, setName] = useState("");
    //const [tag, setTag] = useState("");
    const [classInfo, setClassInfo] = useState([]);
    const Average = arr => {let sum = 0; arr.forEach(grade => sum += grade); return sum / 8;};
    /*const {resData} = useQuery("All students", () => { 
        fetch(`${process.env.HOST}/students/all`, {
            method:"GET"
        }).then(res => {
            if(res.status != 200) {
                alert(res.errors);
                window.location.href = "/home";
            }
            setClassInfo(res.data);
        });
    });*/
    useEffect(() => {
        /*fetch(`${process.env.HOST}/students/all`, {
            method:"GET"
        }).then(res => {
            if(res.status != 200) {
                alert(res.errors);
                window.location.href = "/home";
            }
            setClassInfo(res.data);
        });*/
        
        fetch('https://api.hatchways.io/assessment/students', {
            method:"GET"
        }).then(response => response.json()).then(resData => {
            let cInfo = [];
            resData.students.forEach(student => {
                let gradeNums = [];
                student.grades.forEach(grade => gradeNums.push(parseInt(grade)));
                //cInfo.push({...student, avg: Average(gradeNums), tags: []});
                cInfo.push({...student, avg: Average(gradeNums)});
            });
            setClassInfo(cInfo);
        });
    }, []);

    const FilterCondition = (studentInfo) => {
        let fullName = `${studentInfo.firstName} ${studentInfo.lastName}`;
        //return (fullName.includes(name)) || (studentInfo.tags.includes(tag));
        return fullName.includes(name);
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

export default Filters;
