import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate=useNavigate();
    const UserDashboard=()=>{
        navigate('/userdashboard');
    }
    return (
        <div>
            <form action="">
                <input className='input-field' type="email" name="" id="usermail" placeholder='Enter Your Email' /><br /><br />
                <input className='input-field' type="password" name="" id="userPassword" placeholder='Enter your password' /> <br />
                <p className='p-text'>
                    <small>Forgot Password?
                    <Link className='Llink' to="/Register"> Reset Password</Link>
                    </small>
                </p>
                <button onClick={UserDashboard} className='w-100 fw-bold submit-button'>
                    <span className='my-5'>Submit</span> 
                </button>
                <p className='p-text mt-2'>
                    <small>Don't have an account?
                    <Link className='Llink' to="/Register"> Sign Up</Link>
                    </small>
                </p>
            </form>
        </div>
    );
};

export default Login;