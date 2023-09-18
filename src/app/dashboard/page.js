import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='md:flex text-center mb-96'>
            <div className='md:w-[15%]  bg-violet-600 text-[#ffffff] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div>
            <div className='md:w-[85%] bg-white md:right-0 md:absolute pb-20'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;
