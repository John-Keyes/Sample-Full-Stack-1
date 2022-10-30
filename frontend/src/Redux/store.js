import {Authorization} from "./reducer";
import {applyMiddleware, combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';

const middleWare = [thunk];

combineReducers({auth: Authorization});

const store = configureStore(combineReducers, applyMiddleware(...middleWare));

export default store;
