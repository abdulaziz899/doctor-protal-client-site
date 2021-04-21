import React, { useContext, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
}

const Dashboard = () => {
    const [selectedDate ,setSelectedDate]=useState(new Date());
    const [appointments,setAppointments]=useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleChange=(date)=>{
        setSelectedDate(date);
        fetch('https://ancient-sands-53700.herokuapp.com/appointmentByDate',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({date:selectedDate,email:loggedInUser.email })
        })
        .then(res=>res.json())
        .then(data=>{
            setAppointments(data)
        })
    }
    return (
        <section >
            <div style={containerStyle,{height:"100vh"}} className="container-fluid row  ">
                <div style={{backgroundColor:"#1bddd3",color:'green'}} className="col-md-2  ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-3  ">
                    <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-7 d-sm-12 ">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;