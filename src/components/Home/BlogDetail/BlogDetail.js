import React from 'react';

const BlogDetail = (props) => {
    const {name ,img,date,title}=props.blog;
    return (
        <div className='col-md-4 col-sm-12  my-5 '>
                <div className='testimonialDetailContainer'>
                <div className=' d-flex justify-content-center'>
                        <div>
                            <img src={img} className='img-fluid mr-4' alt=""/>
                        </div>
                            <div>
                                <h3>{name}</h3>
                                <h5>{date}</h5>
                            </div>
                        </div>
                        <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur qui unde voluptate vero, illum omnis deserunt 
                    debitis minus, nulla aperiam incidunt eveniet
                    doloribus porro dolore excepturi tenetur facilis. Quibusdam, 
                    inLorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur qui unde voluptate vero, illum omnis deserunt 
                    </p>
                        
                </div>
        </div>
    );
};

export default BlogDetail;