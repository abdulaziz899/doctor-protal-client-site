import React from 'react';
import { Link } from 'react-router-dom';
import Char from '../../../images/Mask Group 1.png'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
                <div className="col-md-4 offset-md-1">
                    <h2 style={{color:'#3A4256'}} >Your New Smile <br/> <span className='text-danger'> Here Start </span></h2>
                    <p className='text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum provident ad, incidunt, obcaecati modi in hic, expedita dolorem sint optio corrupti pariatur quisquam illum possimus sed voluptates? Accusantium, laborum molestias?</p>
                    <Link to='/appointment'><button type="button" class="btn btn-outline-danger">GAT APPOINTMENT</button></Link>
                </div>
                <div className="col-md-6 ">
                    <img src={Char} className='img-fluid' alt=""/>
                </div>
        </main>
    );
};

export default HeaderMain;