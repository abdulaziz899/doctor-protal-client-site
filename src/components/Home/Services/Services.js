import React from 'react';
import './Services.css';
import Fluoride from '../../../images/001-dental.png'
import Cavity  from '../../../images/tooth (1).png'
import Teath from '../../../images/tooth.png'
import Service from '../Service/Service';
const Services = () => {
    const serviceData=[
        {
            name:'Fluoride Treatment',
            img:Fluoride,
        },
        {
            name:'Cavity Filling',
            img:Cavity,
        },
        {
            name:'Teath Whitening',
            img:Teath,
        }
]
    return (
        <section className='container mt-5'>
            <div className='text-center my-4'>
                <h5 className='my-4 text-info'>OUR SERVICES</h5>
                <h2>Services We Provider</h2>
            </div>
            <div className='row mt-5 py-3'>
                {
                    serviceData.map(service=><Service service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;