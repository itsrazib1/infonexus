'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import { Link } from 'react-scroll';

const Sidebar = () => {
    const { user } = UserAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                console.log("User data in component:", userData);
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    // const remaining = users.filter(ele => ele.role == 'admin');
    // const filtered = users.filter(p => p.role === "admin")
    // console.log(remaining);
    const isAdmin = user && user.role === "admin";

    return (
        <div>
            <div className='flex justify-center items-center  mt-6'>
                <Image
                    src={user?.photoURL}
                    width={45}
                    height={45}
                    className="rounded-full cursor-pointer me-2"
                    alt=""
                />
                <h1 className='text-xl'> Admin Panel</h1>
            </div>
            <hr className='mt-5' />
            <div className='mx-0'>
                <ul className='grid md:grid-cols-2 sm:grid-cols-1 text-center  md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                    {
                       isAdmin ?
                            <>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashHome" smooth>Admin Home</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><a href="/" >Home</a></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashAllUser" smooth>All User</Link></li><li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Sales" smooth>Sales</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Marketings" smooth>Marketings</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="service" smooth>Service</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Finances" smooth>Finances</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Hr" smooth>HR</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Legal" smooth>Legal</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="securityITManagement" smooth>Security IT Management</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="bianalytics" smooth>Bi Analytics</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="projectManagement" smooth>Project Management</Link></li>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="developerplatform" smooth>developerplatform</Link></li>
                            </> :
                            <>
                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="userManagement" smooth>User Management</Link></li>
                            </>
                            
                    }

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;