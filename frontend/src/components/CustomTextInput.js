import React, {useState} from 'react';
import {UpdateFeedback} from '../Global/Feedback';


const CustomTextInput = ({name, borderType, inputType = "text", id, title, placeholder, value, setValue, Condition = false, left = null, right = null, apiErrors}) => {
const [errors, setErrors] = useState([]);
    const HandleOnChange = (val) => {
        setValue(val);
        setErrors(UpdateFeedback(name, val));
    }
    
    return (
        <div className={`formInputContainer ${borderType}`}>
            {title ? <span className="formLabel">{title}{Condition ? <span style={{color: "red"}}> *</span>: null}</span> : null}
            <div style={{display: "flex", flexDirection: "row"}}>
                {left}
                <input className="formInput" type={inputType} placeholder={placeholder} name={name} id={id} value={value} onChange={(e) => HandleOnChange(e.target.value)}/>
                {right}
            </div>
            {errors.map((error, index) => <div key={index} className="feedBack">{error}</div>)}
            {apiErrors.map((error, index) => <div key={index} className="feedBack">{error}</div>)}
        </div>
    );
}

export default CustomTextInput;