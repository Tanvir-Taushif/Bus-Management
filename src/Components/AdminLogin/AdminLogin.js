import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import "./AdminLogin.css";
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const navigate=useNavigate();
    const adminPrev=()=>{
        navigate('/homepage');
    }
    const adminDashboard=()=>{
        navigate('/adminDashboard');
    }
    return (
        <div className='adminLogin-div'>
          <div class="container">
                <div class="row g-2">
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                         <div className='userdiv text-center'>
                            <div className='dv'>
                                <FontAwesomeIcon className='icon' icon={faUser}/>
                                <h4>Admin Login</h4>
                                <button className='admin-prev' onClick={adminPrev}>Previous</button>
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
                                <button className='button' onClick={adminDashboard}>Login</button>
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