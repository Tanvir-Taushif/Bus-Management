import React from 'react';
import "./Header.css";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  }
    return (
        <div className='head'>
          <div class=" container text-center">
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                   <div className='d-flex my-3'>
                    <img src="images/bup-logo.png" height={60} width={57} alt="" />
                    <div>
                    <h4 className='fw-bold'>Bangladesh University of Professionals</h4>
                    <h6>Excellence Through Knowledge</h6>
                    </div>
                   </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <button onClick={navigateHome} className='name-text fw-bold mt-2 p-1'>Bus Management System</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Header;