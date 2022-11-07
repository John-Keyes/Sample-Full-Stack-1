import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Filters from '../pages/Filters';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import SideBar from '../pages/SideBar';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
//import store from './store';
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
				<Route path="/" element={SideBar}>
					<Route index path="/Home" element = {Home}/>
					{/*
						<div>
							{isAdmin == 'T' ?
							<Route path="Filters" element = {<Filters classInfo={classInfo}/>}/>
							:<Route path="Profile" element = {Profile}/>
							}
						</div>
					*/}
					<Route path="Auth" element = {Auth}/>
					<Route path="Filters" element = {<Filters classInfo={classInfo}/>}/>
					<Route path="Profile" element = {Profile}/>
					<Route path="NoPage" element = {NoPage}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
