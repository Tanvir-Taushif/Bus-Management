import React from 'react';
import './SocialLogin.css';

const SocialLogin = () => {
    return (
        <div className='social-login'>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='line'></div>
                <p className='mt-2 px-2'>or</p>
                <div className='line'></div>
            </div>
            <button className='google-button w-100'>
                <div className='p-1'>
                    <img height="20px" width="20px" src="/images/google.png" alt="" />
                    <span className='px-2 fw-bold'> Login with Google </span>
                </div>
            </button>
        </div>
    );
};

export default SocialLogin;