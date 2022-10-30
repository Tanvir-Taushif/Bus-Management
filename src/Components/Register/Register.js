import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='registration-div'>
           <div  className="p-5">
            <div className="registration-form p-3">
                <h4 className="text-center fw-bold my-2">Registration</h4>
                <form action="">
                        <input className='input-field' type="text" name="" id="userId"  placeholder='Enter Student ID'/> <br />
                        <div className='my-3'>
                        <span className='p-2'>Department:</span> 
                        <select>
                            <option>Choose One</option>
                            <option>ICT</option>
                            <option>ES</option>
                            <option>CSE</option>
                            <option>Law</option>
                            <option>IR</option>
                            <option>MC&J</option>
                            <option>PCH&R</option>
                            <option>DMR</option>
                            <option>Eco</option>
                            <option>DS</option>
                            <option>English</option>
                            <option>Public Ad</option>
                            <option>Sociology</option>
                            <option>BBA-Gen</option> 
                            <option>Management</option>
                            <option>Marketing</option>
                            <option>F&B</option> 
                            <option>AIS</option>
                        </select>
                        </div>
                        <input className='input-field' type="email" name="" id="usermail" placeholder='Enter Your Email' /><br /><br />
                        <input className='input-field' type="password" name="" id="userPassword" placeholder='Create Password' /> <br /><br/>
                        <input className='input-field' type="password" name="" id="userPassword" placeholder='Confirm Password' /> <br />
                        <button className='w-100 fw-bold my-3 submit-button'>
                            <span className='my-5'>Register</span> 
                        </button>
                    </form>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='line'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div className='line'></div>
                    </div>
                    <button className='lowerMargin google-button w-100'>
                        <div className='p-1'>
                            <img height="20px" width="20px" src="/images/google.png" alt="" />
                            <span className='px-2 fw-bold'> Sign Up with Google </span>
                        </div>
                    </button>
                   </div>
            </div>
        </div>
    );
};

export default Register;