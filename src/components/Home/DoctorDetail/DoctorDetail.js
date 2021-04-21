import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faPhone } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const DoctorDetail = ({doctor}) => {
    console.log(doctor);
    const history=useHistory();
    const doctors=()=>{
        history.push('/appointment')
    }

    return (
        <div className='col-md-4 col-sm-12'>
            <div onClick={doctors} className='doctorDetail text-center w-100'>
                <img style={{height:'150px'}} src={doctor.img}/>
                <h2 className='text-center'>{doctor.name}</h2>
                <div className='d-flex justify-content-between px-5 pt-4'>
                    <p><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></p>
                    <p>+88017769878584</p>
                </div>
            </div>
            
        </div>
    );
};

export default DoctorDetail;