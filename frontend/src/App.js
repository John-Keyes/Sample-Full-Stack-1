import React, {useState, useEffect} from 'react';
import Filters from './pages/Filters.js';

const App = () => {
  const [classInfo, setClassInfo] = useState([]);
    const Average = arr => {let sum = 0; arr.forEach(grade => sum += grade); return sum / arr.length;};
    /*const {resData} = useQuery("All students", () => { 
        fetch(`${HOST}/students/all`, {
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
        /*fetch(`${HOST}/students/all`, {
            method:"GET"
        }).then(res => {
            if(res.status != 200) {
                alert(res.errors);
                window.location.href = "/Filters";
            }
            setClassInfo(res.data);
        });
        */
        
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
  return <Filters classInfo={classInfo}/>;
}

export default App;