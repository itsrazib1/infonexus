import React from 'react';

const PartThree = () => {
    return (
        <div>
            
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Products</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay text-2xl md:ms-12"></label>
                    <div className='ms-8 menu text-base'>
                        <ul>
                            <li><a>App</a></li>
                        </ul>
                    </div>


                    <ul className="menu md:ms-14 p-4 w-64 h-auto bg-base-100 text-base-content">
                        {/* Sidebar content here */}
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
                    </ul>
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay text-xl md:ms-12">Suites</label> */}
                    <ul className='menu ms-8 text-base'>
                        <li><a>Suites</a></li>
                        <li><a>Zoho One</a></li>
                        <li><a>Marketplace</a></li>
                        <li><a>Mobile Apps</a></li>
                        <li><a>Browser Extensions</a></li>
                    </ul>



                </div>

            </div>
        </div>
    );
};

export default PartThree;