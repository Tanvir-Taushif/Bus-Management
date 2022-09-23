import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='head'>
          <div class=" container mb-3 text-center">
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
                    <h2 className='fw-bold mt-2 p-1'>Bus Management System</h2>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Header;