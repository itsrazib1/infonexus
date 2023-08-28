'use client'
import Image from 'next/image';
import React from 'react';
import { UserAuth } from '../Context/AuthContext';
import { Link } from 'react-scroll';

const Sidebar = () => {
    const { user } = UserAuth();
    console.log(user);
    return (
        <div>
            <div className='flex justify-center items-center  mt-5'>
                <Image
                    src={user?.photoURL}
                    width={45}
                    height={45}
                    className="rounded-full cursor-pointer me-2"
                    alt=""
                />
                <h1 className='text-xl'> Admin Panel</h1>
            </div>
            <hr className='mt-0' />
            <div className='mx-0'>
                <ul className='grid md:grid-cols-2 sm:grid-cols-1 text-center  md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="dashHome" smooth>Admin Home</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="dashAllUser" smooth>All User</Link></li><li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Sales" smooth>Sales</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Marketings" smooth>Marketings</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="service" smooth>Service</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Finances" smooth>Finances</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Hr" smooth>HR</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Legal" smooth>Legal</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="securityITManagement" smooth>Security IT Management</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="bianalytics" smooth>Bi Analytics</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="projectManagement" smooth>Project Management</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="developerplatform" smooth>developerplatform</Link></li>
                    <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="userManagement" smooth>User Management</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;