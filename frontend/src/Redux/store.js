import reducer from "./reducer";
import {configureStore} from '@reduxjs/toolkit';
/*
Configure Store already uses redux-thunk which allows you to return functions, rather than just actions, 
within Redux. This allows for asynchronous actions, including working with promises.
*/
const store = configureStore(reducer);

export default store;
