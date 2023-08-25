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
                            <li><>App</></li>
                        </ul>
                    </div>


                    <ul className="menu md:ms-14 p-4 w-64 h-auto bg-base-100 text-base-content">
                        {/* Sidebar content here */}
                        <li><a href='#sales' >sales</a></li>
                        <li><a href='#Marketing'>Marketing</a></li>
                        <li><a href='#Service'>Service</a></li>
                        <li><a href='#Finance'>Finance</a></li>
                        <li><a href='#Email'>Email & Collaboration</a></li>
                        <li><a href='#HR'>HR</a></li>
                        <li><a href='#Legal'>Legal</a></li>
                        <li><a href='#Security'>Security & IT Management</a></li>
                        <li><a href='#BI'>BI & Analytics</a></li>
                        <li><a href='#Project'>Project Management</a></li>
                        <li><a href='#Developer'>Developer Platforms</a></li>
                    </ul>
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay text-xl md:ms-12">Suites</label> */}
                    <ul className='menu ms-8 text-base'>
                        <li>Suites</li>
                        <li><a href='#InfoNexus'>InfoNexus One</a></li>
                        <li><a href='#Marketplace'>Marketplace</a></li>
                        <li><a href='#Mobile'>Mobile Apps</a></li>
                        <li><a href='#Browser'>Browser Extensions</a></li>
                    </ul>



                </div>

            </div>
        </div>
    );
};

export default PartThree;