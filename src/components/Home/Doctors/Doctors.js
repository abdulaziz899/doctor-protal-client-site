import React, { useEffect, useState } from 'react';
import './Doctors.css';
import DoctorImg from '../../../images/5790-removebg.png';
import DoctorDetail from '../DoctorDetail/DoctorDetail';


const Doctors = () => {
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        fetch('https://ancient-sands-53700.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setDoctors(data);
        })
    },[]);
    return (
        <section className='container my-3  py-5'>
            <h2 className='text-center text-primary'>Our Doctor </h2>
            <div className="row mt-5">
                {
                    doctors.map(doctor=><DoctorDetail key={doctor._id} doctor={doctor}></DoctorDetail>)
                }
            </div>
        </section>
    );
};

export default Doctors;