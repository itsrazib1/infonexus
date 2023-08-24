'use client'
import Image from 'next/image';
import React from 'react';
import { UserAuth } from '../Context/AuthContext';

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
            <hr className='mt-10' />
            <div className='mt-14'>
                <ul>
                    <li className='mt-5 hover:bg-[#b1b8b1] hover:text-black w-40 mx-auto'><a href="#">Admin Home</a></li>
                    <li className='mt-5 hover:bg-[#b1b8b1] hover:text-black w-40 mx-auto'><a href="#">User Management</a></li>
                    <li className='mt-5 hover:bg-[#b1b8b1] hover:text-black w-40 mx-auto'><a href="#">All User</a></li>
                    <li className='mt-5 hover:bg-[#b1b8b1] hover:text-black w-40 mx-auto'><a href="#">Service</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;