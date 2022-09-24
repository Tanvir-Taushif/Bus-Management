import React from 'react';
import "./SelectRoute.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGear, faUser,faRoute } from '@fortawesome/free-solid-svg-icons';
const SelectRoute = () => {
    return (
        <div>
         <div class="container px-4 text-center">
          <div class="row gx-5">
            <div class="col">
              <div class="p-3 border">
                <div className='cat2'>
                <FontAwesomeIcon className='cat' icon={faUser}></FontAwesomeIcon>
                <h4 className="cat1">Assign Driver</h4>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="p-3 border bg-light">
                <div className='cat5'>
                <FontAwesomeIcon className='cat3' icon={faRoute}></FontAwesomeIcon>
                <h4 className="cat4">Assign Route</h4>
                </div>
              </div>
            </div>
          </div>
         </div>  
        </div>
    );
};

export default SelectRoute;