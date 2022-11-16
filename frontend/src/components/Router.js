import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import StudentList from '../pages/StudentList';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import Header from '../pages/Header';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
//import {getToken, deleteToken} from '../Global/Token';

// Use this function when login is finished.
/*const ConfirmLogout = () => {
	if(token) {
		let userChoice = confirm("Are you sure you want to logout?");
		if(userChoice) {
			deleteToken();
		}
		return false;
	}
	return Auth;
}*/

const Router = ({classInfo}) => {
	//const token = getToken();
	//const isAdmin = store.getState().payload.isAdmin;
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header/>}>
					<Route index element = {<Home/>}/>
					{/*authInfo ?
						<div>
							{authInfo.isAdmin == 'T' ?
							<Route path="StudentList" element = {<StudentList classInfo={classInfo}/>}/>
							:<Route path="Profile" element = {Profile}/>
							}
						</div>
					*/}
					<Route path="Auth" element = {<Auth/>}/>
					<Route path="StudentList" element = {<StudentList classInfo={classInfo}/>}/>
					<Route path="Profile" element = {<Profile/>}/>
					<Route path="*" element = {<NoPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
