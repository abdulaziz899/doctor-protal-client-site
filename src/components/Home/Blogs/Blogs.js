import React from 'react';
import './Blogs.css';
import Wilson from '../../../images/Ellipse 1.png'
import Aliza from '../../../images/Ellipse 2.png'
import Ema from '../../../images/Ellipse 3.png'
import BlogDetail from '../BlogDetail/BlogDetail';
const blogs=[
    {
        name:' Dr Wilson Harry',
        img:Wilson,
        date:'20/april/1999',
        title:'Doctor tell something patient'
    },
    {
        name:'Dr Ema Gomez',
        img:Ema,
        date:'20/april/1999',
        title:'Doctor tell something patient'
    },
    {
        name:' Dr Aliza Farari',
        img:Aliza,
        date:'20/april/1999',
        title:'Doctor tell something patient'
    },
]
const Blogs = () => {
    return (
        <section id='blog' className='blogContainer container '>
            <h4 className='text-center text-info'>OUR BLOG </h4>
            <h2  className='text-center text-success'> From Our Blog News</h2>
            <div className='row'>
                {
                    blogs.map(blog=><BlogDetail blog={blog}></BlogDetail>)
                }
            </div>
        </section>
    );
};

export default Blogs;