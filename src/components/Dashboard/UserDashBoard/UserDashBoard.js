import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserDashboardDetail from './UserDashboardDetail';
import UserDashboardSetail from './UserDashboardDetail';

const UserDashBoard = () => {
    const [userDashboard,setUserDashboard]=useState([]);
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch('https://ancient-sands-53700.herokuapp.com/appointmentByDate?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setUserDashboard(data);
            console.log(data);
        })
    })
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 pt-5 ">
                    <h1 className='text-capitalize text-center text-secondary'>Your detail</h1>
                    {userDashboard.length?<div className="row  pt-5">
                        {
                            userDashboard.map(user=><UserDashboardDetail key={user._id} user={user}></UserDashboardDetail>)
                        }
                    </div>: <div className='text-center'>
                        <p className='text-capitalize py-5 text-center text-danger'>sorry get appointment</p>
                        <Link to='/appointment'><button className='btn btn-outline-primary'> <FontAwesomeIcon className='mr-4' icon={faCalendar}></FontAwesomeIcon> Appointment</button></Link>
                    </div> }
                </div>
            </div>
        </div>
    );
};

export default UserDashBoard;