import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddFeedBack} from '../Global/Feedback';
import {SignUp} from '..//Redux/actions';
import CustomTextInput from './CustomTextInput';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

//Put asterick next to required fields.

const Register = () => {
    const dispatch = useDispatch();
    const {loading, errors} = useSelector(state => state.user);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    //const [errors, setErrors] = useState({});
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const SubmitRegistration = () => {
        if(!loading) { 
            dispatch(SignUp({firstName: firstName, lastName: lastName, email: email.toLowerCase(), passsword: password}));
            navigate("/Auth");
        }
    }
    return (
        <div className="formContainer">
            <CustomTextInput 
                borderType={'u'} 
                id={"register_FirstName"}
                title={"First Name"} 
                placeholder={"Your First Name"}
                value={firstName} 
                setValue={setFirstName}
                Condition={(val) =>  val.length > 0 ? AddFeedBack("", errors?.firstName) : AddFeedBack("You must enter a first name.", errors?.firstName)}
            />
            <CustomTextInput 
                borderType={'u'} 
                id={"register_LastName"}
                title={"Last Name"} 
                placeholder={"Your Last Name"}
                value={lastName} 
                setValue={setLastName}
                Condition={(val) =>  val.length > 0 ? AddFeedBack("", errors?.lastName) : AddFeedBack("You must enter a last name.", errors?.lastName)}
            />
            <CustomTextInput 
                borderType={'u'} 
                id={"register_Email"}
                title={"Email"} 
                placeholder={"A Email"}
                value={email} 
                setValue={setEmail}
                Condition={(val) => emailPattern.test(val?.toLowerCase()) ? AddFeedBack("", errors?.email) : AddFeedBack("Invalid Email.", errors?.email)}
            />
            <CustomTextInput 
                borderType={'u'} 
                inputType={secureTextEntry ? "password" : "text"}
                id={"register_Password"}
                title={"Password"} 
                placeholder={"A Password"}
                value={password} 
                setValue={setPassword}
                Condition={(val) => (val.length > 7) && (val.length < 21) ? AddFeedBack("", errors?.password) : AddFeedBack("Password must be between 8 and 20 characters.", errors?.password)}
                right={() => 
                    <svg onClick={() => setSecureTextEntry(!secureTextEntry)} xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                        <path d={secureTextEntry ? "M10 13.354q1.583 0 2.688-1.104 1.104-1.104 1.104-2.688 0-1.583-1.104-2.687Q11.583 5.771 10 5.771q-1.583 0-2.688 1.104-1.104 1.104-1.104 2.687 0 1.584 1.104 2.688Q8.417 13.354 10 13.354Zm0-1.542q-.938 0-1.594-.656-.656-.656-.656-1.594 0-.937.656-1.593.656-.657 1.594-.657.938 0 1.594.657.656.656.656 1.593 0 .938-.656 1.594-.656.656-1.594.656Zm0 4.021q-3.062 0-5.552-1.708-2.49-1.708-3.615-4.563 1.125-2.854 3.625-4.541Q6.958 3.333 10 3.333t5.542 1.688q2.5 1.687 3.625 4.541-1.125 2.855-3.615 4.563-2.49 1.708-5.552 1.708Zm0-6.271Zm0 4.521q2.333 0 4.281-1.218 1.948-1.219 2.969-3.303-1.021-2.083-2.969-3.281T10 5.083q-2.333 0-4.292 1.198Q3.75 7.479 2.729 9.562q1.021 2.084 2.979 3.303Q7.667 14.083 10 14.083Z": "M13.521 11.021 12.25 9.75q.083-1-.646-1.771-.729-.771-1.792-.667l-1.27-1.27q.354-.146.718-.209.365-.062.74-.062 1.583 0 2.688 1.104 1.104 1.104 1.104 2.687 0 .417-.073.792-.073.375-.198.667Zm2.646 2.625-1.25-1.229q.75-.584 1.333-1.271.583-.688 1-1.584-1.021-2.083-2.958-3.281Q12.354 5.083 10 5.083q-.604 0-1.115.073-.51.073-1.01.219L6.5 4q.854-.354 1.708-.51.854-.157 1.792-.157 3.146 0 5.615 1.719 2.468 1.719 3.552 4.51-.479 1.23-1.25 2.261-.771 1.031-1.75 1.823Zm.229 5.208-3.458-3.458q-.73.229-1.459.333-.729.104-1.479.104-3.167 0-5.625-1.739-2.458-1.74-3.542-4.532.417-1.083 1.084-2.01.666-.927 1.5-1.677L1.125 3.562l1.25-1.208 15.25 15.271ZM4.604 7.062q-.583.542-1.062 1.157-.48.614-.813 1.343 1.021 2.084 2.959 3.303Q7.625 14.083 10 14.083q.354 0 .74-.031.385-.031.739-.114l-.667-.667q-.187.041-.395.062-.209.021-.417.021-1.583 0-2.688-1.104-1.104-1.104-1.104-2.688 0-.208.032-.395.031-.188.072-.396Zm6.771 1.813ZM8.042 10.5Z"}/>
                    </svg>
                }
            />
            <Button additionalButtonStyles={{backgroundColor: "blue"}} toggle={() => SubmitRegistration()}>
                <span className="buttonText">Sign Up</span>
            </Button>
        </div>
    );
}

export default Register;