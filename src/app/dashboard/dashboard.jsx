import React from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';

const Dashboard = () => {
    return (
        <div>
            <div>
                <DashBoardHome />
            </div>
            <div>
                <AllUser />
            </div>
        </div>
    );
};

export default Dashboard;