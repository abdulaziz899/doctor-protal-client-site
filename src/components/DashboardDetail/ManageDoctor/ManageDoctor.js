import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './ManageDoctor.css';
import ManageDoctorDetail from './ManageDoctorDetail';
const ManageDoctor = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(() => {
        const url=`https://ancient-sands-53700.herokuapp.com/doctors`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDoctors(data))
     }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-3"><Sidebar></Sidebar></div>
                <div className="col-md-9">
                    <h1>Manage Doctor </h1>
                    <div className="row">
                        {
                            doctors.map(doctor=><ManageDoctorDetail doctor={doctor} key={doctor._id}></ManageDoctorDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctor;