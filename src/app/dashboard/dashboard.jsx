import React from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';
import AllServices from './AllServices';
import UserManagement from './UserManagement';

const Dashboard = () => {
    return (
        <div>
            <div className='w-[70%]' >
                <DashBoardHome />
            </div>
            <div>
                <AllUser />
            </div>
            <div>
                <AllServices/>
            </div>
            <div>
                <UserManagement/>
            </div>
        </div>
    );
};

export default Dashboard;