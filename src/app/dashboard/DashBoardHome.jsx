'use client'
import React from 'react';
import { UserAuth } from '../Context/AuthContext';
const DashBoardHome = () => {
    const { user } = UserAuth();
    console.log(user);
    return (
        <div className='mt-6'>
            <hr className='w-80 mx-auto mt-5 mb-5'/>
            <p className='text-[#297aa8] font-serif font-bold text-4xl'>{user?.displayName} Dashboard !!!</p>
            <hr className='w-80 mx-auto mt-5'/>
        </div>
    );
};

export default DashBoardHome;