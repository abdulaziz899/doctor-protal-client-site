import React from 'react';
import './MakeAppointment.css';
import DoctorImg from '../../../images/5790-removebg.png'
const MakeAppointment = () => {
    return (
        <section className='makeAppointmentContainer'>
            <section className='makeAppointment container '>
            <div className="row doctorImg">
                <div className="col-md-5  ">
                    <img src={DoctorImg}  className='img-fluid' alt=""/>
                </div>
                <div className="col-md-7 col-sm-12 ">
                       <div className='mt-5'>
                       <h4 className='my-3'>APPOINTMENT</h4>
                        <h2 className='my-3'>Make An Appointment Today</h2>
                        <p className='my-3 text-danger'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Corrupti expedita consequuntur itaque excepturi non est,
                            voluptatum aspernatur laudantium tenetur vitae 
                            laboriosam libero animi, fuga dicta labore molestias
                            eveniet velit eos.</p>
                        <button className="btn btn-outline-warning mt-5 d-sm-mt-0">Learn More</button>
                       </div>
                </div>
            </div>
        </section>
        </section>
    );
};

export default MakeAppointment;