import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Filters from '../pages/Filters';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';
import SideBar from '../pages/SideBar';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
//import {getToken} from '../Global/Token';
//import {} from '';

const Router = () => {
	//const token = getToken();
	//const isAdmin =;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={SideBar}>
					<Route index path="Home" element = {Home}/>
					{/*token ?
						<div>
							{isAdmin ?
							<Route path="Filters" element = {Filters}/>
							:<Route path="Profile" element = {Profile}/>
							}
						</div>
						: <Route path="" element = {Auth}/>
					*/}
					<Route path="Auth" element = {Auth}/>
					<Route path="Filters" element = {Filters}/>
					<Route path="Profile" element = {Profile}/>
					<Route path="NoPage" element = {NoPage}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
