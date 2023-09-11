import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='md:flex text-center mb-96'>
            <div className='md:w-[25%] bg text-[#00e7a2] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div>
            <div className='md:w-[75%] bg md:right-0 md:absolute pb-20'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;
