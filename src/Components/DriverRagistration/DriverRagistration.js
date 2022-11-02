import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverRagistration.css';
const DriverRagistration = () => {
    const navigate=useNavigate();
    const addDriver=()=>{
        navigate('/driverList');
    }
    return (
        <div className='drivRegComponent'>
            <br /> <br /> <br />
            <div className='my-5 container regTab d-flex flex-column align-items-center'>
                <h1>New Driver Ragistration</h1>
                <form  className='py-3' action="">
                    <table className='pt-5'>
                        <tr>
                            <td className='pt-2'><p>Name : </p></td>
                            <td className='px-2'> <input type="text" /></td>
                        </tr>
                        <tr>
                            <td className='pt-2'><p>Phone Number : </p></td>
                            <td className='px-2'> <input type="text" /></td>
                        </tr>
                    </table>
                    <button onClick={addDriver} className='addRegButton w-100'> Add </button>
                </form>
            </div>
        </div>
    );
};

export default DriverRagistration;