import {createSlice} from '@reduxjs/toolkit';
import {UpdateFeedback, ClearFeedback} from './actions';

const Feedback = createSlice({
    name: "feedback",
    initialState: {firstName: [], lastName: [], email: [], password: {suggestions: [], errors: []}},
    reducers: {
        UpdateFeedback: (state, type, val) => UpdateFeedback(state, type, val),
        ClearFeedback: (state, specifiedKey) => ClearFeedback(state, specifiedKey)
    },
});

export default Feedback;