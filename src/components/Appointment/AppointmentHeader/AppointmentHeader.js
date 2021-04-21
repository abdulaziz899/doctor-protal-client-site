import React from 'react';
import Char from '../../../images/Mask Group 1.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleChange}) => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h1>Appointment</h1>
                    <Calendar
                        onChange={handleChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6 ">
                    <img src={Char} className='img-fluid' alt=""/>
                </div>
        </main>
    );
};

export default AppointmentHeader;