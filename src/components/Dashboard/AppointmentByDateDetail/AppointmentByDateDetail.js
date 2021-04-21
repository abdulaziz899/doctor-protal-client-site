import React from 'react';
import './AppointmentByDateDetail.css';
const AppointmentByDateDetail = (props) => {
    const {name,phone,email}=props.detail;
    return (
            <tbody>
                <tr>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td> <button className='btn btn-outline-primary'>Not VIsited</button> </td>
                </tr>
            </tbody>
    
    );
};

export default AppointmentByDateDetail;