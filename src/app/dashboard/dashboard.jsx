'use client'
import React, { useEffect, useState } from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';
import AllServices from './AllServices';
import UserManagement from './UserManagement';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';
import UserCart from './UserCart';
import MyService from './Myservice';
import ProductChart from './ProductChart';
import UserAdminChart from './UserAdminChart';
import Selected from './Selected';

const Dashboard = () => {
    const { user } = UserAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                console.log("User data in component:", userData);
                // Add this line to log the user data from the database
                console.log("DatabaseUser:", userData);
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);
    const adminUsers = users.filter(u => u.role === 'admin');
    const isAdmin = adminUsers.some(u => u.email === user?.email);
    console.log("Userdata", user, users, adminUsers, isAdmin)
    return (
        <div>
            <div></div>
            {
                isAdmin ?
                    <>
                        <div>
                            <DashBoardHome />
                        </div>
                        <div className='md:flex gap-4 md:w-[90%] m-auto'>
                            <ProductChart className="md:w-1/2 ngh"/>
                            <UserAdminChart className="md:w-1/2 ngh"/>
                        </div>
                        <div>
                            <AllUser />
                        </div>
                        <div>
                            <UserManagement />
                        </div>
                        <div>
                            <AllServices />
                        </div>
                    </> :
                    <>
                        <div  >
                            <DashBoardHome />
                        </div>
                        <div className='md:flex gap-4 md:w-[90%] m-auto'>
                            <Selected className="md:w-1/2 ngh"/>
                            <UserAdminChart className="md:w-1/2 ngh"/>
                        </div>
                        <div>
                            <UserCart />
                        </div>
                        
                        <div>
                            <MyService />
                        </div>

                    </>
            }
        </div>
    );
};

export default Dashboard;