import { getToken, setToken } from "../Global/Token";
import { Authorization } from "./reducer";

const LOGGEDIN = "LOGGEDIN";
const LOGGEDOUT = "LOGGEDOUT";


export const SignIn = async (bodyObject, setErrors) => {
        const token = getToken();
        await fetch(`${process.env.HOST}/students/register`, {
            method: "POST", 
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(bodyObject),
        }).then(res => {
            if(res.status != 200) {
                if(res.errors?.other) {
                    alert(res.errors.other);
                    res.errors.other = undefined;
                }
                setErrors(res.errors);
                return false;
            }
            setToken(res.data.token);
            Authorization(LOGGEDIN, res.data.students);
            window.location.href = "/Home";
        }).catch(() => {alert("Cannot connect to the server."); return false;});
    }

    export const SignUp = async (bodyObject, setErrors) => {
        await fetch(`${process.env.HOST}/students/register`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyObject)
        }).then(res => {
            if(res.status != 200) {
                if(res.errors?.other) {
                    alert(res.errors.other);
                    res.errors.other = undefined;
                }
                setErrors(res.errors);
                return false;
            }
            Authorization(LOGGEDOUT, res.data);
            window.location.href = "/Home";
        }).catch(() => {alert("Cannot connect to the server."); return false;});
    }

    export const UpdateProfile = async (bodyObject, setErrors) => {
        const token = getToken();
        await fetch(`${process.env.HOST}/students/update`, {
            method: "PUT", 
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(bodyObject)
        }).then(res => {
            if(res.status != 200) {
                if(res.errors?.other) {
                    alert(res.errors.other);
                    res.errors.other = undefined;
                }
                setErrors(res.errors);
                return false;
            }
            Authorization(LOGGEDIN, res.data);
            window.location.href = "/Home";
        }).catch(() => {alert("Cannot connect to the server."); return false;});
    }