import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import "./AdminLogin.css";
const AdminLogin = () => {
    return (
        <div>
          <div class="container">
                <div class="row g-2">
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                         <div className='userdiv text-center'>
                            <div className='dv'>
                                <FontAwesomeIcon className='icon' icon={faUser}/>
                                <h4>Admin Login</h4>
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
                                <br></br>
                                <p className='text-center'>or</p>
                                <button className='button'>Continue with Google</button>
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

export default AdminLogin;