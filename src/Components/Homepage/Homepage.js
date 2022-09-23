import React from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGear, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Homepage.css";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div>
      <div class="home-cont container px-4 text-center">
        <div class="row gx-5">
          <div class="col-md-6 col-sm-12">
            <div class="p-3">
              <Link className="mod-link homeLogin" to="/userLogin">
                <div className="homeLogin">
                  <div>
                    <br /><br /><br />
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <h4 className="icon-name">User</h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
             <div class="p-3">
               <Link className="mod-link homeLogin" to="/adminLogin">
                <div className="homeLogin">
                  <div>
                    <br /><br /><br />
                    <FontAwesomeIcon className="icon" icon={faGear} />
                    <h4 className="icon-name">Admin</h4>
                  </div>
                </div>
               </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
