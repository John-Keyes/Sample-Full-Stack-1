import {getToken, setToken} from "../Global/Token";
import {createAsyncThunk} from '@reduxjs/toolkit';

    export const SignUp = createAsyncThunk("Register", async (bodyObject, {rejectWithValue, fulfillWithValue}) => {
            await fetch("HOST/students/register", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(bodyObject)
            }).then(res => {
                if(res.status != 200) {
                    alert(res.error);
                    return rejectWithValue(res.error);
                }
                return fulfillWithValue({studentID: res.data});
            }).catch(() => rejectWithValue("Cannot connect to the server."));
    });
    

    /*export const SignInOnMount = (setClassInfo) => {
        fetch(`${HOST}/students/loginOnMount`, {
            method:"GET",
        }).then(res => {
            if(res.status != 200) {
                alert(res.errors);
                window.location.href = "/home";
            }
            setClassInfo(res.data);
        });
    }*/

    export const SaveProfile = createAsyncThunk("SaveProfile", async (theMethod, endPoint, bodyObject, {rejectWithValue, fulfillWithValue}) => {
            const token = getToken();
            //let studentID = store.getState().payload.studentID
            await fetch(`HOST/students/${endPoint}`, {
                method: theMethod, 
                headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
                body: JSON.stringify(bodyObject)
            }).then(res => {
                switch(res.status) {
                    case 200:
                        setToken(res.data.token);
                        //dispatch(Authorization(LOGGEDIN, res.data.student));
                        return fulfillWithValue(res.data);
                    case 410:
                        alert(res.error);
                        //setErrors({email: res.error});
                        return rejectWithValue({email: res.error});
                    case 415:
                        alert(res.error);
                        //setErrors({password: res.error});
                        return rejectWithValue({password: res.error});
                    default:
                        return rejectWithValue({other: res.error});
                }
            }).catch(() => rejectWithValue("Cannot connect to the server."));
    })