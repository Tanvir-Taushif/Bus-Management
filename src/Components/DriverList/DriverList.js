import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverList.css';

const DriverList = () => {
    const navigate=useNavigate();
    const driverRagistration=()=>{
        navigate('/driverRagistration');
    }
    return (
        <div className='driverList'>
            <div className='container'>
                <br /><br /><br />
                <h1>Driver's List</h1>
                <div class="container px-4 text-center">
                    <div class="row gx-5">
                        <div class="col-10 col-lg-10">
                            <div class="p-3">
                                <div className="driverTable">
                                    <table className='divTable'>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Contact Number</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-2 col-lg-2">
                            <div class="p-3">
                                <button onClick={driverRagistration} className="addButton"> Add Driver</button>
                                <br /> <br />
                                <button className="removeButton">Remove Driver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverList;