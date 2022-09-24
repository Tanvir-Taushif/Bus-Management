import React from 'react';

const AdminDashBoard = () => {
    return (
        <div>
            <div class="container overflow-hidden text-center">
            <div class="row gy-5">
                <div class="col-4">
                <div class="p-3 border bg-light">BUS LIST</div>
                </div>
                
                <div class="col-4">
                <div class="p-3 border bg-light">DRIVER LIST</div>
                </div>
                <div class="col-4">
                <div class="p-3 border bg-light">STAFFS</div>
                </div>
                <div class="col-4">
                <div class="p-3 border bg-light">AUTHORIZED ADMINS</div>
                </div>
                <div class="col-4">
                <div class="p-3 border bg-light">MANAGEMENT</div>
                </div>
                <div class="col-4">
                <div class="p-3 border bg-light">MAINTENANCE</div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;