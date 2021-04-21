import React from 'react';
import AppointmentByDateDetail from '../AppointmentByDateDetail/AppointmentByDateDetail';

const AppointmentByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div className=''>
            <h1 className='text-info text-center'> Total Appointment </h1>
            {appointments.length?<table class="table ">
                <thead class="thead-light">
                    <tr>
                        <th className='text-secondary'  scope="col">Name</th>
                        <th className='text-secondary'  scope="col">Phone</th>
                        <th className='text-secondary'  scope="col">Email</th>
                        <th className='text-secondary'  scope="col">Action</th>
                    </tr>
                </thead>
                    {
                        appointments.map(detail=><AppointmentByDateDetail detail={detail}></AppointmentByDateDetail>)
                    }
            </table>:<p>no appointment </p>}
           
        </div>
    );
};

export default AppointmentByDate;