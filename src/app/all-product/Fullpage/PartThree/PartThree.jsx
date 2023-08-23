import React from 'react';


const PartThree = () => {
    return (
        <div className='bg-base-200 '>

            <div className="drawer lg:drawer-open bg-base-200">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden items-center justify-center ">Open Products </label>


                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay text-2xl md:ms-12"></label>

                    <ul className="menu  md:ms-14 px-4 w-64 h-auto bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a className='text-2xl -ms-6 px-4'>App</a></li>
                        <li><a>sales</a></li>
                        <li><a>Marketing</a></li>
                        <li><a>Service</a></li>
                        <li><a>Finance</a></li>
                        <li><a>Email & Collaboration</a></li>
                        <li><a>HR</a></li>
                        <li><a>Legal</a></li>
                        <li><a>Security & IT Management</a></li>
                        <li><a>BI & Analytics</a></li>
                        <li><a>Project Management</a></li>
                        <li><a>Developer Platforms</a></li>
                        <li><a className='text-xl -ms-6' >Suites</a></li>
                        <li><a className='text-xl -ms-6'>InfoNexus One</a></li>
                        <li><a className='text-xl -ms-6'>Marketplace</a></li>
                        <li><a className='text-xl -ms-6'>Mobile Apps</a></li>
                        <li><a className='text-xl -ms-6'>Browser Extensions</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default PartThree;