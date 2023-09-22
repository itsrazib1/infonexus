"use client"
import React, { useState, useEffect } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { getusers } from '../utils/getusers';
import { updateUserRole } from './updateUserRole';

const UserManagement = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);


    const handleDeleteUser = async (userId) => {
        try {
            // Send an HTTP DELETE request to your API to delete the user
            const response = await fetch(`/api/users/${userId}`, {
                method: 'DELETE',
            });

            if (response.status === 200) {
                // If the deletion is successful, update the local state to remove the deleted user
                setUsers((prevUsers) =>
                    prevUsers.filter((prevUser) => prevUser._id !== userId)
                );

            } else {
                // Handle errors here, such as displaying an error message to the user
                console.error("Error deleting user. Status:", response.status);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    const handleMakeAdmin = async (userId) => {
        try {
            // Send a PUT request to update the user's role to "admin"
            const response = await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newRole: 'admin' }),
            });

            if (response.status === 200) {
                // If the update is successful, update the local state to reflect the new role
                setUsers((prevUsers) =>
                    prevUsers.map((prevUser) =>
                        prevUser._id === userId ? { ...prevUser, role: 'admin' } : prevUser
                    )
                );

            } else {
                // Handle errors here, such as displaying an error message to the user
                console.error("Error updating user role. Status:", response.status);
            }
        } catch (error) {
            console.error("Error updating user role:", error);
        }
    };

    return (
        <div className='mt-28' id='userManagement'>
            <div className=''>
                <hr className='w-full mx-auto mt-5 mb-5' />
                <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl md:w-[500px]'>User Management</p>
                <hr className='w-full mx-auto mt-5' />
            </div>

            <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                <div className="overflow-x-auto  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-[#d8d65e] text-base'>
                                <th>Index</th>
                                <th>Name</th>
                                <th className="md:block hidden">Email</th>
                                <th>Role</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                Array.isArray(users) ? (
                                    users.map((p, index) => (
                                        <tr key={p._id}>
                                            <th>{index + 1}</th>
                                            <td>{p?.name}</td>
                                            <td  className="md:block hidden">{p?.email}</td>
                                            <td>{p.role === 'admin' ? 'admin' :
                                                <button
                                                    className="btn btn-warning rounded-full text-black"
                                                    onClick={() => handleMakeAdmin(p._id)}
                                                >
                                                    <FaUserGraduate />
                                                </button>
                                            }</td>
                                            <td><button className="btn btn-circle btn-outline btn-error"
                                                onClick={() => handleDeleteUser(p._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button></td>
                                            {/* Other table cells */}
                                        </tr>
                                    ))
                                ) : (
                                    <p>Loading...</p> // or an error message
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        // {user?.role === 'admin' ? 'admin' :
        // <button onClick={() => handleMakeAdmin(user)}
    );
};

export default UserManagement;