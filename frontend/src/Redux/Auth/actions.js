import {getToken, setToken, deleteToken} from "../../Global/Token";
import {createAsyncThunk} from '@reduxjs/toolkit';

    export const Logout = state => {
        state = {authInfo: null, error: null, isLoading: false, success: false};
        deleteToken();
    }

    export const SignUp = createAsyncThunk("Register", async (bodyObject, {rejectWithValue, fulfillWithValue}) => {
            await fetch("HOST/Auth/Register", {
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

    export const SaveProfile = createAsyncThunk("SaveProfile", async (theMethod, endPoint, bodyObject, {rejectWithValue, fulfillWithValue}) => {
            const token = getToken();
            await fetch(`HOST/Auth/${endPoint}`, {
                method: theMethod, 
                headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
                body: JSON.stringify(bodyObject)
            }).then(res => {
                switch(res.status) {
                    case 200:
                        setToken(res.data.token);
                        return fulfillWithValue(res.data);
                    case 410:
                        return rejectWithValue({email: res.error});
                    case 415:
                        return rejectWithValue({password: res.error});
                    default:
                        return rejectWithValue({other: res.error});
                }
            }).catch(() => rejectWithValue("Cannot connect to the server."));
    })