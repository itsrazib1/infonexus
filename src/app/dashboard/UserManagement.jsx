"use client"
import React, { useState, useEffect } from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { getusers } from '../utils/getusers';

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                // console.log("User data in component:", userData); 
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='mt-16' id='userManagement'>
            <div>
                <hr className='w-full mx-auto mt-5 mb-5' />
                <p className='text-[#c75633] font-serif font-bold text-3xl'>User Management {users?.length} !!!</p>
                <hr className='w-full mx-auto mt-5' />
            </div>
            <div className='w-5/6 mx-auto mt-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-[#222324] text-base'>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
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
                                            <td>{p?.email}</td>
                                            <td>{p.role === 'admin' ? 'admin' :
                                        <button className="btn btn-warning rounded-full text-black"><FaUserGraduate /></button>
                                    }</td>
                                     <td><button className="btn btn-circle btn-outline btn-error">
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