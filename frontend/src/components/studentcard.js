import React from 'react';
//import CustomTextInput from './CustomTextInput.js';
//import Button from './Button.js';


const StudentCard = ({studentInfo}) => {
    /*const [tagName, setTagName] = useState("");
    const AddTag = (e) => {
        e.preventDefault();
        setTagName(e.target.value);
        console.log(tagName);
        if(studentInfo.tags.includes(tagName)) {
            alert("No duplicate tags.");
            return false;
        }
        studentInfo.tags.push(tagName);
        studentInfo.tags = [...studentInfo.tags];
        console.log(studentInfo.firstName, studentInfo.tags);
        return false;
    }*/
    return (
        <div style={container}>
            <img alt={studentInfo.firstName} src={studentInfo.pic} style={{width: "20%"}}/>
            <div style={{width: "60%"}}>
                <div style={{textAlign: "center"}}>
                    <h1>{`${studentInfo.firstName} ${studentInfo.lastName}`}</h1>
                </div>
                <div style={{marginLeft: "25%"}}>
                    <div>Email: {studentInfo.email}</div>
                    <div>Company: {studentInfo.company}</div>
                    <div>Skill: {studentInfo.skill}</div>
                    <div>Average: {studentInfo.avg}%</div>
                </div>
                {/*
                {studentInfo.tags.length === 0 ? (
                    <div style={{display: "flex"}}>
                    {studentInfo.tags.map((tag) => {
                        return <Button key={tag}><span className="buttonText">{tag}</span></Button>;
                    })}
                    </div>
                ) : null}
                <form style={{justifyContent: "center", display: "flex"}} onSubmit={() => AddTag()}>
                    <div style={{marginRight: "1%"}}>
                        <CustomTextInput 
                            borderType={"underlineBorder"} 
                            id={"taginput"} 
                            title={"Tag Name"} 
                            placeholder={"List tag"} 
                            value={tagName} 
                            setValue={setTagName} 
                            Condition={(val) => studentInfo.tags.includes(val)}
                        />
                    </div>
                    <Button color="primary" type="submit">Add Tag</Button>
                </form>
                */}
            </div>
        </div>
    );
}

export default StudentCard;


    const container = {
        justifyContent: "space-around", 
        display: "flex", 
        flexDirection: "row", 
        fontFamily: "Raleway", 
        //border: "0.25em solid #222",
        backgroundColor: "#444",
        borderRadius: "1.5em",
        margin: "5%"
    };

