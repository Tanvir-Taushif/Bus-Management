import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserLogin.css";

const UserLogin = () => {
    return (
        <div>
            <div class="container">
                <div class="row g-2">
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                         <div className='userdiv text-center'>
                            <div className='dv'>
                                <FontAwesomeIcon className='icon' icon={faUser}/>
                                <h4>User Login</h4>
                            </div>
                         </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                           <div className="login">
                           <div className='login1'>
                             <form>
                            
                                <input type="email" placeholder=" Enter Your Email"></input>
                                <br></br><br></br>
                                <input type="password" placeholder="Password"></input>
                                <br></br><br></br>
                                <button className='button'>Login</button>
                                <p>forgot password?</p>
                                <br></br>
                                <button className='button'>Continue with Google</button>
                                <p>Don't have an account?</p>
                                <br></br> 
                                <button className='button'>Sign Up</button>
                              </form>
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