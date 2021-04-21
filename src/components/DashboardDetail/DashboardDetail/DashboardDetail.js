import React from 'react';

const DashboardDetail = (props) => {
    console.log(props.index);
    const {name,phone,email,date,gender,weight}=props.patient;
 
    return (
        <tbody>
            <tr>
            <th scope="row">{props.index+1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{gender}</td>
            <td>{weight}</td>
            <td> <button className='btn btn-outline-primary'>Not VIsited</button> </td>
            </tr>
    </tbody>

    );
};

export default DashboardDetail;