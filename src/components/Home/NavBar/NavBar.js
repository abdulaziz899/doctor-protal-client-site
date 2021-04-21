import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <nav class="navbar navbar-expand-lg navbar-light  text-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ml-auto mb-2  mb-lg-0">
                            <Link to='/home'>
                                <li  class="nav-item">
                                <a class="nav-link mr-5 mr-2 active" aria-current="page" href="#">Home</a>
                                </li></Link>
                            <Link to='/dashboard'><li class="nav-item">
                            <a class="nav-link mr-5 mr-2" href="#">Dashboard</a>
                            </li></Link>
                            <li class="nav-item">
                            <a class="nav-link mr-5 mr-2 text-success" href="#blog">Blog</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link mr-5 mr-2 text-success" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default NavBar;