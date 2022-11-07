import {createSlice} from '@reduxjs/toolkit';
import {SignUp, SaveProfile} from './actions';

/*const initialPayload = {
    studentID: -1,
    city: "",
    country: "",
    firstName: "",
    lastName: "",
    average: 0,
    grades: [],
    pic: "",
    skills: [],
    isAdmin: 'F'
}*/

/*export const Authorization = (action, payload = initialPayload) => {
    return {action: action, payload: payload};
}*/


export const Authorization = createSlice({
    name: "auth",
    initialState: {authInfo: null, error: null, loading: false, success: false},
    reducers: {},
    extraReducers: {
        /*
            Actions created with createAsyncThunk generate three 
            possible lifecycle action types: pending, fulfilled, and rejected.
        */
        [SignUp.pending]: state => state.loading = true,
        [SignUp.fulfilled]: (state, payload) => {
            state.loading = false;
            state.success = true;
            state.authInfo = payload;
        },
        [SignUp.rejected]: (state, payload) => {
            state.loading = false;
            state.success = false;
            state.error = payload;
        },
        [SaveProfile.pending]: state => state.loading = true,
        [SaveProfile.fulfilled]: (state, payload) => {
            state.loading = false;
            state.success = true;
            state.authInfo = payload;
        },
        [SaveProfile.rejected]: (state, payload) => {
            state.loading = false;
            state.success = false;
            state.error = payload;
        }
    }
});


