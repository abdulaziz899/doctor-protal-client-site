import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointments = () => {
    const [selectedDate ,setSelectedDate]=useState(new Date());
    const handleChange=(date)=>{
        setSelectedDate(date);
    }
    return (
        <div>
            <NavBar></NavBar>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointments;