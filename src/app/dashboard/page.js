import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='flex text-center mb-96'>
            <div className='w-[25%] bg-[#003366] text-[#038fdd] h-screen fixed pt-12 top-0'>
                <Sidebar />
            </div>
            <div className='w-[75%] bg-[#7B7B7C] right-0 absolute pb-20'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;