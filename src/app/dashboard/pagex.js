'use client'
import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';

const Pagex = () => {
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
    return (
        
   <div>
    <Dashboard users={users} user={user}/>
   </div>
    );
};

export default Pagex;