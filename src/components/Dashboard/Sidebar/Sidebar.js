import { faCalendar, faCog, faFilePrescription, faHospitalUser, faSignOutAlt, faThList, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);
    useEffect(()=>{
        const url=`https://ancient-sands-53700.herokuapp.com/isDoctor`
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email: loggedInUser.email})
        })
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
    },[])
    return (
        <div className='mt-5 pt-5 sidebarContainer'>
           {isAdmin&&<Link to='/patient'> <p> <FontAwesomeIcon className='mr-4' icon={faThList}></FontAwesomeIcon>  Dashboard</p></Link>}
           {!isAdmin&&<Link to='/userDashboard'> <p> <FontAwesomeIcon className='mr-4' icon={faThList}></FontAwesomeIcon>Your Detail</p></Link>}
           {isAdmin&&<Link to='/appointment'><p> <FontAwesomeIcon className='mr-4' icon={faCalendar}></FontAwesomeIcon> Appointment</p></Link>}
           {isAdmin&&<Link to='/patient'><p> <FontAwesomeIcon className='mr-4' icon={faHospitalUser}></FontAwesomeIcon> Patients</p></Link>}
           {isAdmin&&<Link to='/prescriptions'><p> <FontAwesomeIcon className='mr-4' icon={faFilePrescription}></FontAwesomeIcon> Prescriptions</p></Link>}
           {isAdmin&&<Link to='/addDoctor'><p> <FontAwesomeIcon className='mr-4' icon={faUser}></FontAwesomeIcon> Add Doctor</p></Link>}
           {isAdmin&&<Link to='/manageDoctor'><p> <FontAwesomeIcon className='mr-4' icon={faUser}></FontAwesomeIcon> Manage Doctor</p></Link>}
           <Link to='/setting'><p> <FontAwesomeIcon className='mr-4' icon={faCog}></FontAwesomeIcon> Setting</p></Link>
           <button className="btn btn-outline-danger"> <FontAwesomeIcon  className='mr-2' icon={faSignOutAlt}></FontAwesomeIcon> Logout</button>
           
        </div>
    );
};

export default Sidebar;