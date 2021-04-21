import React from 'react';
import './Dental.css';
import DentalImg from '../../../images/Mask Group 3.png'
const Dental = () => {
    return (
        <section className='container dentalContainer '>
            <div className="row ">
                <div className="col-md-6 col-sm-12">
                    <img src={DentalImg} className='img-fluid' alt=""/>
                </div>
                <div className="col-md-6 col-sm-12 d-flex align-items-center ">
                    <div className=' w-100 h-75'>
                        <h1>Exceptional Dental <br/> Care ,On Your Terms</h1>
                        <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel error odit, neque voluptates sapiente temporibus, placeat optio quis expedita amet maiores et asperiores corporis commodi quod id quo cupiditate accusantium.
                        Vel error odit, neque voluptates sapiente temporibus, placeat optio quis expedita amet maiores et asperiores corporis commodi quod id quo cupiditate accusantium.
                        adipisicing elit. Vel error odit, neque voluptates sapiente temporibus, placeat optio quis expedita amet maiores et asperiores corporis commodi quod id quo cupiditate accusantium.
                        Vel error odit, neque voluptates sapiente temporibus, placeat optio quis expedita amet maiores et asperiores corporis commodi quod id quo cupiditate accusantium.
                        </p>
                        <button className=" btn btn-outline-primary ">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dental;