import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import "./UserLogin.css";

const UserLogin = () => {
    return (
        <div>
            <div class="container">
                <div class="row g-2">
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                         <div className='text-center'>
                         <FontAwesomeIcon className='icon' icon={faUser}/>
                         <h4>User Login</h4>
                         </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="p-3">
                           <div>
                             <form>
                                <input type="email" placeholder="Enter your email"></input>
                                <br></br><br></br>
                                <input type="password" placeholder="Enter your password"></input>
                                <br></br><br></br>
                                <button>Login</button>
                                <br></br><br></br>
                             </form>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;