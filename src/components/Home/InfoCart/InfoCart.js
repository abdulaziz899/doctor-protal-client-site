import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCart.css';
const InfoCart = (props) => {
    const {title,description,icon,background}=props.data;
    return (
        <div className='col-md-4 col-sm-12   mb-4 text-white ' >
            <div className={ `d-flex justify-content-between px-4 d-sm-mb-4  py-5  data-${background}`}>
                <div>
                    <FontAwesomeIcon className='fontIcons mr-2' icon={icon} />
                </div>
                <div >
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCart;