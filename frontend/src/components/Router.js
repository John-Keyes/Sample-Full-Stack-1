import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';
import StudentList from '../pages/StudentList';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import Header from '../pages/Header';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Login from '../pages/AuthActions/Login';
import Register from '../pages/AuthActions/Register';
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

const ProtectedRoute = ({firstName}) => {
	if(firstName) {
		return (
			<div></div>
		);
	}
};
const Router = ({classInfo}) => {
	const firstName = useSelector(state => state.auth.authInfo.firstName);
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
					<Route path="Auth/Login" element = {<Auth/>}>
						<Route index element = {<Login/>}/>
						<Route path="Register" element = {<Register/>}/>
					</Route>

					<Route path="StudentList" element = {<StudentList classInfo={classInfo}/>}/>
					<ProtectedRoute firstName={firstName}>
						<Route path="Profile" element = {<Profile/>}/>
					</ProtectedRoute>
					<Route path="*" element = {<NoPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
