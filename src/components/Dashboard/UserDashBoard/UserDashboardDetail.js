import React from 'react';

const UserDashboardDetail = (props) => {
    const {name,phone,email,service}=props.user;
    return (
        <div className='cl-md-4'>
            <div className='shadow p-4 bg-success m-1'>
                <h3>{name}</h3>
                <h2>{service}</h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default UserDashboardDetail;