'use client'
import React, { useEffect, useState } from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';
import AllServices from './AllServices';
import UserManagement from './UserManagement';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';

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
<<<<<<< HEAD
=======
    console.log("Userdata", user, users, adminUsers, isAdmin)
>>>>>>> db7616d009f8dd1a2b0c7835ac49f20b74d3da3f
    return (
        <div>
            {
                isAdmin ?
                    <>
                        <div  >
                            <DashBoardHome />
                        </div>
                        <div>
                            <AllUser />
                        </div>
                        <div>
                            <AllServices />
                        </div>
<<<<<<< HEAD
                        <div>
                            <UserManagement />
                        </div>
                    </> :
                    <>
=======
>>>>>>> db7616d009f8dd1a2b0c7835ac49f20b74d3da3f
                        <div>
                            <UserManagement />
                        </div>


                    </> :
                    <>

                        <div>
                            <AllUser />
                        </div>

                    </>
            }
        </div>
    );
};

export default Dashboard;