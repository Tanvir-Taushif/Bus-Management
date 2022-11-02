import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashBoard.css';

const AdminDashBoard = () => {
    const navigate=useNavigate();
    const navDriverList=()=>{
        navigate('/driverList');
    }
    return (
        <div className='adminBoard'>
           <div>
            <div class="container overflow-hidden text-center">
                <br /> <br /> <br /> <br />
                <div class="row gy-5">
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                        <button className='adminButton'>BUS LIST</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton' onClick={navDriverList}>DRIVER LIST</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton'>STAFFS</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton'>AUTHORIZED ADMINS</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton'>MANAGEMENT</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton'>MAINTAINANCE</button>
                    </div>
                    </div>
                </div>
                </div>
           </div>
        </div>
    );
};

export default AdminDashBoard;