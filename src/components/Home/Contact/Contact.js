import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section id='contact' className=' contactDetailContainer mb-5 py-5'>
            <div className="container contactContainer ">
                <h2 className='text-center text-primary my-5'>CONTACT US</h2>
                <form>
                    <div className='contactDetails'>
                        <div className="form-group">
                            <input type="email" className="form-control my-4"  placeholder="Enter Your Email"/>
                            <input type="text" className="form-control"  placeholder="subject"/>
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" placeholder='message' rows="3"></textarea>
                        </div>
                        <button  className='btn btn-outline-light text-center'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;