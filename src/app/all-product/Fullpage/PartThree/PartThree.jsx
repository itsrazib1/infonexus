'use client'
import { Link } from 'react-scroll';

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
                            <li className='hover:text-blue-500'><>App</></li>
                        </ul>
                    </div>


                    <ul className="menu md:ms-14 p-4 w-64 h-auto bg-base-100  text-base-content">
                        {/* Sidebar content here */}
                        <li><Link className='hover:text-blue-500' to="sales" smooth>Sales</Link></li>
                        <li><Link className='hover:text-blue-500' to="Marketing" smooth>Marketing</Link></li>
                        <li><Link className='hover:text-blue-500' to="Service" smooth>Service</Link></li>
                        <li><Link className='hover:text-blue-500' to="Finance" smooth>Finance</Link></li>
                        <li><Link className='hover:text-blue-500' to="Email" smooth>Email & Collaboration</Link></li>
                        <li><Link className='hover:text-blue-500' to="HR" smooth>HR</Link></li>
                        <li><Link className='hover:text-blue-500' to="Legal" smooth>Legal</Link></li>
                        <li><Link className='hover:text-blue-500' to="Security" smooth>Security & IT Management</Link></li>
                        <li><Link className='hover:text-blue-500' to="BI" smooth>BI & Analytics</Link></li>
                        <li><Link className='hover:text-blue-500' to="Project" smooth>Project Management</Link></li>
                        <li><Link className='hover:text-blue-500' to="Developer" smooth>Developer Platforms</Link></li>
                    </ul>
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay text-xl md:ms-12">Suites</label> */}
                    <ul className='menu ms-8 text-base'>
                        <li className='hover:text-blue-500'>Suites</li>
                        <li><Link className='hover:text-blue-500' to="InfoNexus" smooth>InfoNexus One</Link></li>
                        <li><Link className='hover:text-blue-500' to="Marketplace" smooth>Marketplace</Link></li>
                        <li><Link className='hover:text-blue-500' to="Mobile" smooth>Mobile Apps</Link></li>
                        <li><Link className='hover:text-blue-500' to="Browser" smooth>Browser Extensions</Link></li>
                    </ul>



                </div>

            </div>
        </div>
    );
};

export default PartThree;