import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="userboard">
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <h2 className="userDashboardTitle">Bus Routes & Schedule</h2>
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
                            <option>BUP</option>
                            <option>Shahbag</option>
                            <option>Kakrail</option>
                            <option>Arambag</option>
                            <option>Motijheel</option>
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
                            <option>BUP</option>
                            <option>Shahbag</option>
                            <option>Kakrail</option>
                            <option>Arambag</option>
                            <option>Motijheel</option>
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
                  <h3 className="userDashboardTitle">Nearest Bus Stop:</h3>
                </div>
              </div>
              <div class="col-sm-12 col-lg-8">
                <div class="p-3">
                  <div className="table-cont">
                    <table className="routeTable">
                      <tr>
                        <th> No </th>
                        <th> Stopage </th>
                        <th> Time </th>
                        <th> Bus Number </th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>BUP</td>
                        <td>1200</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Dhaka Cantonment</td>
                        <td>1500</td>
                        <td>B</td>
                      </tr>
                    </table>
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

export default UserDashboard;
