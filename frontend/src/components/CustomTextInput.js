import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


const CustomTextInput = ({borderType, id, title, placeholder, value, setValue, Condition, left, right}) => {
    const [inputFeedback, setInputFeedback] = useState("");
    useSelector(state => state.feedback);
    useEffect(() => {
        setInputFeedback();
    }, [])
    const HandleOnChange = (val) => {
        setValue(val);
        if(Condition) {
            setInputFeedback(Condition(val));
        }
    }
    
    //const inputRef = useRef(value);
    return (
        <div className={`formInputContainer ${borderType === 'r' ? "roundBorder": "underlineBorder"}`}>
            {title ? <span className="formLabel">{title}{Condition ? <span style={{color: "red"}}>*</span>: null}</span> : null}
            <div style={{display: "flex", flexDirection: "row"}}>
                {left}
                <input className="formInput" type="text" placeholder={placeholder} name={title ? title : placeholder} id={id} value={value} onChange={(e) => HandleOnChange(e.target.value)}/>
                {right}
            </div>
            <span className="feedBack">{inputFeedback}</span>
        </div>
    );
}

//memo(CustomTextInput, () => value !== inputRef.current.value);
export default CustomTextInput;