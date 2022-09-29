import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';
const Homepage = () => {
  const navigate = useNavigate();
  const adminLogin=()=>{
    navigate('/adminLogin');
  }
  const userLogin=()=>{
    navigate('/userLogin');
  }
  return (
    <div>
      <div className="front-img">
          <img className="w-100" src="/images/frontpage-image.png" alt="" />
          <div className="writer">
            <span className="fix-span">Welcome !</span>
            <Typewriter options={{loop:true}} onInit={typewriter=>{
              typewriter.typeString("Find Bus routes!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Bus Schedule!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Drivers' Contact Number!")
              .pauseFor(2000)
              .deleteAll()
              .typeString("System Administration!")
              .start();
            }}>
            </Typewriter>
          </div>
      </div>
      <div class="home-cont container px-4 text-center">
        <div class="row gx-5">
          <div class="col-md-6 col-sm-12">
            <div class="p-3">
              <button className="mod-link homeLogin" onClick={userLogin}>
                  <div>
                    <br /><br /><br />
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <h4 className="icon-name">User</h4>
                  </div>
              </button>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
             <div class="p-3">
               <button className="mod-link homeLogin" onClick={adminLogin}>
                  <div>
                    <br /><br /><br />
                    <FontAwesomeIcon className="icon" icon={faGear} />
                    <h4 className="icon-name">Admin</h4>
                  </div>
               </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
