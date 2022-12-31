import React from 'react';
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import StudentList from '../pages/StudentList';
import Home from '../pages/Home';
import Header from '../pages/Header';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Login from '../pages/AuthActions/Login';
import Register from '../pages/AuthActions/Register';
import AccountValidation from '../pages/AuthActions/AccountValidation';


const ProtectedRoute = ({varthatExists, routeToGo}) => {
	if(varthatExists) {
		return <Navigate to={routeToGo} replace/>;
	}
	//allows nested routes to render their element content out and anything else the 
	//layout route is rendering, i.e. navbars, sidebars, specific layout components, etc
	return <Outlet/>;
};

/*const Restricted = () => {
	return <Navigate to="AccountValidation" replace/>;
	return <Outlet/>;
}*/
const Router = ({classInfo}) => {
	const firstName = useSelector(state => state.auth.authInfo?.firstName);
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header/>}>
					<Route index element = {<Home/>}/>
					<Route path="Auth" element = {<Auth/>}>
						<Route path="Login" element = {<Login/>}/>
						<Route path="Register" element = {<Register/>}/>
						<Route element={<ProtectedRoute varthatExists={firstName} routeToGo="AccountValidation"/>}>
							<Route path="AccountValidation" element = {<AccountValidation/>}/>
						</Route>
					</Route>
					<Route path="StudentList" element = {<StudentList classInfo={classInfo}/>}/>
					<Route element={<ProtectedRoute varthatExists={firstName} routeToGo="Profile"/>}>
						<Route path="Profile" element = {<Profile/>}/>
					</Route>
					<Route path="*" element = {<Navigate to="/" replace/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
