import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserLogin.css";
import SocialLogin from '../SocialLogin/SocialLogin';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom';



const UserLogin = () => {
    const navigate=useNavigate();
    const userPrev=()=>{
        navigate('/homepage');
    }
    return (
        <div className='userlogin-div '>
            <div className='p-3'>
                <div class="container overflow-hidden">
                    <div class="row gy-5">
                        <div class="col-sm-12 col-lg-6">
                        <div class="p-3">
                            <div className='us-div text-center'>
                                <FontAwesomeIcon className='userIcon' icon={faUser}></FontAwesomeIcon>
                                <h2>User Login</h2>
                            </div>
                        </div>
                        </div>
                        <div class="col-sm-12 col-lg-6">
                        <div class="p-3">
                            <button className='previous-button' onClick={userPrev}>
                                        Previous
                            </button>
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className='userlogin-form' >
                                    <div className='p-5'>
                                        <Login></Login>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default UserLogin;                                                                                   