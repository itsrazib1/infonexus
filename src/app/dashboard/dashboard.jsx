'use client'
import React, { useEffect, useState } from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';
import AllServices from './AllServices';
import UserManagement from './UserManagement';
import { UserAuth } from '../Context/AuthContext';

const Dashboard = () => {

    const { user } = UserAuth();


    const isAdmin = user && user.role === "admin";
    return (
        <div>
            {
                isAdmin ?
                    <>
                        <div className='w-[70%]' >
                            <DashBoardHome />
                        </div>
                        <div>
                            <AllUser />
                        </div>
                        <div>
                            <AllServices />
                        </div>
                    </> :
                    <>
                        <div>
                            <UserManagement />
                        </div>
                    </>
            }
        </div>
    );
};

export default Dashboard;