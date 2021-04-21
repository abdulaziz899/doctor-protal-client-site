import React, { useState } from 'react';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';

const BookingCart = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 col-sm-12'>
            <div className='card p-3 m-1'>
                <div className='card-body text-center'>
                    <h4 className='card-title text-primary'>{booking.subject}</h4>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACE AVAILABLE</p>
                <button onClick={openModal} className="btn btn-outline-primary text-uppercase">Book appointment</button>
                <AppointmentFrom appointmentOn={booking.subject} date={date}  modalIsOpen={modalIsOpen} closeModal={closeModal}></AppointmentFrom>
                </div>
            </div>
        </div>
    );
};

export default BookingCart;