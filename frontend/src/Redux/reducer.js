import {createSlice} from '@reduxjs/toolkit';
import {deleteToken} from '../Global/Token';
import {SignUp, SaveProfile} from './actions';

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

const initialAuthState = {authInfo: null, error: null, isLoading: false, success: false};

const Authorization = createSlice({
    name: "auth",
    initialState: initialAuthState,
    reducers: {
        logout: state => {
            state = initialAuthState;
            deleteToken();
        }
    },
    //Asynchronous actions handled here.
    extraReducers: {
        [SignUp.pending]: state => state.isLoading = true,
        [SignUp.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.success = true;
            state.authInfo = payload;
        },
        [SignUp.rejected]: (state, payload) => {
            state.isLoading = false;
            state.success = false;
            state.error = payload;
        },
        [SaveProfile.pending]: state => state.isLoading = true,
        [SaveProfile.fulfilled]: (state, payload) => {
            state.isLoading = false;
            state.success = true;
            state.authInfo = payload;
        },
        [SaveProfile.rejected]: (state, payload) => {
            state.isLoading = false;
            state.success = false;
            state.error = payload;
        }
    }
});

export default Authorization.reducer;
