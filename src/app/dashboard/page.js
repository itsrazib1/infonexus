import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='flex text-center mb-96'>
            <div className='w-[25%] bg-[#111313] text-[#00e7a2] h-screen fixed pt-12 top-0'>
                <Sidebar />
            </div>
            <div className='w-[75%] bg-[#252533] right-0 absolute pb-20'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;