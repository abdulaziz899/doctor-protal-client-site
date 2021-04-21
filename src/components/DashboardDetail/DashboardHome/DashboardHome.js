import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import DashboardDetail from '../DashboardDetail/DashboardDetail';

const DashboardHome = () => {
    const [patients,setPatients]=useState([]);
    useEffect(() => {
       const url=`https://ancient-sands-53700.herokuapp.com/appointments`;
       fetch(url)
       .then(res=>res.json())
       .then(data=>setPatients(data))
    }, [])
    return (
        <div style={{height:"100vh"}} className='row container-fluid '>
            <div style={{backgroundColor:"#1bddd3",color:'green'}} className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 ">
                <table class="table ">
                    <thead class="thead-light">
                        <tr>
                            <th className='text-secondary' scope="col">SL</th>
                            <th className='text-secondary' scope="col">Name</th>
                            <th className='text-secondary'  scope="col">Phone</th>
                            <th className='text-secondary'  scope="col">Email</th>
                            <th className='text-secondary'  scope="col">Date</th>
                            <th className='text-secondary'  scope="col">Gender</th>
                            <th className='text-secondary'  scope="col">Weight</th>
                            <th className='text-secondary'  scope="col">Action</th>
                        </tr>
                    </thead>
                        {
                            patients.map((patient,index)=>
                             <DashboardDetail index={index} patient={patient}></DashboardDetail>
                             )}
                </table>
            </div>
        </div>
    );
};

export default DashboardHome;