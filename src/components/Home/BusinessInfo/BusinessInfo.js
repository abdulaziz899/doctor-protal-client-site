import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import {faMapMarkerAlt,faClock,faPhone } from '@fortawesome/free-solid-svg-icons';

const infoData=[
    {
        title:'Opening Hours',
        description:'We are Open  days',
        icon:faClock ,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description:'Brooklyn NY 10038 USA',
        icon:faMapMarkerAlt ,
        background:'dark'
    },
    {
        title:'Call Us Now',
        description:'+1587584695',
        icon:faPhone,
        background:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='container'>
           <div className=' row w-100  businessContainer'>
                {
                    infoData.map(data=><InfoCart data={data}></InfoCart>)
                }
           </div>
        </section>
    );
};

export default BusinessInfo;