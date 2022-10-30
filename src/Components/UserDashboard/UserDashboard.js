import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="container">
      <h2 className="my-5">Bus Routes & Schedule</h2>
      <div class="container text-center">
        <div class="row g-2">
          <div class="col-sm-12 col-lg-8">
            <div class="p-3">
              <div>
                <div class="container px-4 text-center">
                  <div class="row gx-5">
                    <div class="col-6">
                      <div class="p-3">
                        <select className="selectClass" name="" id="">
                          <option value="">
                            <p>
                              <span className="fAimage"></span>
                              <FontAwesomeIcon icon={faLocationDot} />
                              From
                            </p>
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="p-3">
                        <select className="selectClass" name="" id="">
                          <option value="">
                            <p>
                              <span className="fAimage"></span>
                              <FontAwesomeIcon icon={faLocationDot} />
                              To
                            </p>
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-4">
            <div class="p-4">
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="px-4 text-center">
          <div class="row gx-5">
            <div class="col-sm-12 col-lg-4">
              <div class="p-3">
                <h3>Nearest Bus Stop:</h3>
              </div>
            </div>
            <div class="col-sm-12 col-lg-8">
              <div class="p-3">
                <table>
                  <tr>
                    <th> No </th>
                    <th> Stopage </th>
                    <th> Time </th>
                    <th> Driver's Name </th>
                    <th> Number </th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
