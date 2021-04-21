import { faFacebook, faGithubAlt, faLinkedin, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className='container my-5'>
            <div className='row'>
                <div className="col-md-3 col-sm-12">
                    <h2>Need</h2>
                    <p >Emergency dental care</p>
                    <p >check up</p>
                    <p>Treatment of personal disease</p>
                    <p>tooth extraction </p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2>Service</h2>
                    <div>
                        <p >Emergency dental care</p>
                        <p >check up</p>
                        <p>Treatment of personal disease</p>
                        <p>tooth extraction </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                <h2>Service</h2>
                    <div>
                        <p >Emergency dental care</p>
                        <p >check up</p>
                        <p>Treatment of personal disease</p>
                        <p>tooth extraction </p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                <h2>Service</h2>
                    <div className='d-block'>
                        
                        <a href="#" className='text-success  d-block  pt-3  '> <FontAwesomeIcon icon={faFacebook}> </FontAwesomeIcon> Facebook</a>
                        <a  className='text-success pt-3  d-block ' href="#"> <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>  Twitter</a>
                        <a  className='text-success   pt-3  d-block ' href="#" > <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>LinkDin</a>
                        <a  className='text-success  pt-3  d-block ' href="#" > <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon>Github</a>
                        
                    </div>
                </div>
            </div>
            <h2 className='text-center text-primary text-capitalize my-5'>copy write by abdul aziz</h2>
        </footer>
    );
};

export default Footer;