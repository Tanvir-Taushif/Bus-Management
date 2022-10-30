import React from 'react';
import './AdminDashBoard.css';

const AdminDashBoard = () => {
    return (
        <div className='adminBoard'>
           <div>
            <div class="container overflow-hidden text-center">
                <div class="row gy-5">
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                        <button className='adminButton'>BUS LIST</button>
                    </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-6">
                    <div class="p-3">
                    <button className='adminButton'>DRIVER LIST</button>
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