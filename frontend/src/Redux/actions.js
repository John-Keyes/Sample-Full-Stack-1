import {getToken, setToken} from "../Global/Token";
import {Authorization} from "./reducer";


const LOGGEDIN = "LOGGEDIN";
const LOGGEDOUT = "LOGGEDOUT";

    export const SignUp = async (bodyObject, setErrors) => {
        await fetch(`${HOST}/students/register`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyObject)
        }).then(res => {
            if(res.status != 200) {
                alert(res.error);
                setErrors(res.error);
                return false;
            }
            Authorization(LOGGEDOUT, {studentID: res.data});
            window.location.href = "/";
        }).catch(() => {alert("Cannot connect to the server."); return false;});
    }

    export const SignInOnMount = (setClassInfo) => {
        fetch(`${HOST}/students/loginOnMount`, {
            method:"GET",
        }).then(res => {
            if(res.status != 200) {
                alert(res.errors);
                window.location.href = "/home";
            }
            setClassInfo(res.data);
        });
    }

    export const SaveProfile = async (theMethod, endPoint, bodyObject, setErrors) => {
        const token = getToken();
        //let studentID = store.getState().payload.studentID
        await fetch(`${HOST}/students/${endPoint}`, {
            method: theMethod, 
            headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
            body: JSON.stringify(bodyObject)
        }).then(res => {
            switch(res.status) {
                case 200:
                    setToken(res.data.token);
                    Authorization(LOGGEDIN, res.data.students);
                    window.location.href = "/";
                    break;
                case 410:
                    alert(res.error);
                    setErrors({email: res.error});
                    return false;
                case 415:
                    alert(res.error);
                    setErrors({password: res.error});
                    return false;
                default:
                    Authorization(LOGGEDOUT);
                case 420:
                    alert(res.error);
                    setErrors({other: res.error});
                    return false;
            }
        }).catch(() => {alert("Cannot connect to the server."); return false;});
    }