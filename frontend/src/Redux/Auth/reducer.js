import {createSlice} from '@reduxjs/toolkit';
import {SignUp, SaveProfile, Logout} from './actions';
/*
authInfo possible attributes:
    studentID (int),
    city: (string),
    country: (string),
    firstName: (string),
    lastName: (string),
    email: (string),
    password: (string),
    average: (int),
    grades: (int array),
    pic: (string of a valid url),
    skills: (string array),
    isAdmin: (character -> 'T' or 'F')

*/

const Authorization = createSlice({
    name: "auth",
    initialState: {authInfo: null, errors: {firstName: [], lastName: [], email: [], password: []}, isLoading: false, success: false},
    reducers: {
        LogOut: state => Logout(state)
    },
    //Asynchronous actions handled here.
    extraReducers: {
        [SignUp.pending]: state => {
            state.isLoading = true
        },
        [SignUp.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.success = true;
            state.errors = null;
            state.authInfo = payload;
        },
        [SignUp.rejected]: (state, payload) => {
            state.isLoading = false;
            state.success = false;
            state.errors = payload;
        },
        [SaveProfile.pending]: state => {
            state.isLoading = true
        },
        [SaveProfile.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.success = true;
            state.errors = null;
            state.authInfo = payload;
        },
        [SaveProfile.rejected]: (state, payload) => {
            state.isLoading = false;
            state.success = false;
            state.errors = payload;
        }
    }
});

export default Authorization;