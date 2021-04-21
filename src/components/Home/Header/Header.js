import React from 'react';
import Blogs from '../Blogs/Blogs';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import Dental from '../Dental/Dental';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Header.css';

const Header = () => {
    return (
        <div className='headerContainer'>
            <NavBar></NavBar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <Dental></Dental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Header;