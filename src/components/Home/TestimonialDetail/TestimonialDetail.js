import React from 'react';

const TestimonialDetail = (props) => {
    const {img,name}=props.testimonial;
    return (
        <div className='col-md-4 col-sm-12  my-5 '>
                <div className='testimonialDetailContainer'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur qui unde voluptate vero, illum omnis deserunt 
                    debitis minus, nulla aperiam incidunt eveniet
                    doloribus porro dolore excepturi tenetur facilis. Quibusdam, 
                    inLorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur qui unde voluptate vero, illum omnis deserunt 
                    </p>
                        <div className=' d-flex justify-content-center'>
                        <div>
                            <img src={img} className='img-fluid mr-4' alt=""/>
                        </div>
                            <div>
                                <h3>{name}</h3>
                                <h5>California</h5>
                            </div>
                        </div>
                </div>
        </div>
    );
};

export default TestimonialDetail;