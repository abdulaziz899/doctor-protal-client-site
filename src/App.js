import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointments from './components/Appointment/Appointment/Appointments';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DashboardDetail from './components/DashboardDetail/DashboardDetail/DashboardDetail';
import DashboardHome from './components/DashboardDetail/DashboardHome/DashboardHome';
import AddDoctor from './components/DashboardDetail/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageDoctor from './components/DashboardDetail/ManageDoctor/ManageDoctor';
import UserDashBoard from './components/Dashboard/UserDashBoard/UserDashBoard';
;

export const UserContext=createContext();

function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'><Home></Home></Route>
          <Route exact path='/'><Home></Home></Route>
          <PrivateRoute path='/appointment'><Appointments></Appointments></PrivateRoute>
          <Route path='/userDashboard'><UserDashBoard></UserDashBoard></Route>
          <PrivateRoute path='/dashboard'><Dashboard></Dashboard></PrivateRoute>
          <Route path='/patient'><DashboardHome></DashboardHome></Route>
          <Route path='/addDoctor'><AddDoctor></AddDoctor></Route>
          <Route path='/manageDoctor'><ManageDoctor></ManageDoctor></Route>
          <Route path='/login'><Login></Login></Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
