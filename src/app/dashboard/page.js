import React from 'react';
import Dashboard from './dashboard';
import Sidebar from './sidebar';

const page = () => {

    return (
        <div className='md:flex text-center mb-96'>
            {/* <div className='md:w-[20%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-[#ffffff] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div> */}
            <div className='md:w-[20%]  bg-gradient-to-r  from-blue-600 to-cyan-500 text-[#ffffff] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div>
            <div className='md:w-[80%] bg-white md:right-0 md:absolute pb-20'>
                <Dashboard />
            </div>
        </div>
    );
};

export default page;
