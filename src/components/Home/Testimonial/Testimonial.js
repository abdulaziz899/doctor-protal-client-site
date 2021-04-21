import React from 'react';
import './Testimonial.css';
import Wilson from '../../../images/Ellipse 1.png'
import Aliza from '../../../images/Ellipse 2.png'
import Ema from '../../../images/Ellipse 3.png'
import TestimonialDetail from '../TestimonialDetail/TestimonialDetail';
const testimonial=[
    {
        name:'Wilson Harry',
        img:Wilson
    },
    {
        name:'Ema Gomez',
        img:Ema
    },
    {
        name:'Aliza Farari',
        img:Aliza
    },
]
const Testimonial = () => {
    return (
        <section className='container  testimonialContainer '>
            <h3 className='my-4 text-success'>Testimonial </h3>
            <h2 className='mb-5'>What Our Patients Says</h2>
            <div className='row my-5'>
                {
                    testimonial.map(testimonial=><TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                }
            </div>
        </section>
    );
};

export default Testimonial;