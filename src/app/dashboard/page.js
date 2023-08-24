import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='flex text-center mb-96'>
            <div className='w-[25%] bg-[#003366] text-[#038fdd] h-screen fixed'>
                <Sidebar />
            </div>
            <div className='w-[75%] bg-gradient-to-tr from-amber-400 via-cyan-300 to-emerald-500 right-0 absolute h-screen'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;