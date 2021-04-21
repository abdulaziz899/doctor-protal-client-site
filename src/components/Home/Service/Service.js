import React from 'react';

const Service = (props) => {
    const {name,img}=props.service;
    return (
        <div className='col-md-4 col-sm-12 text-center'>
            <div className='w-100 '>
                <img className='serviceImg ' src={img} alt=""/>
                <h2 className='my-4'>{name}</h2>
                <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, necessitatibus, temporibus neque suscipit eius excepturi beatae dolore quos nobis aut earum velit repellendus quia minima maiores numquam libero ea voluptatem?</p>
            </div>
        </div>
    );
};

export default Service;