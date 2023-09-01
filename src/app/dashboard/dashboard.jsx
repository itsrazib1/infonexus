
import Image from 'next/image';
import { Link } from 'react-scroll';
import React from 'react';
import DashBoardHome from './DashBoardHome';
import AllUser from './AllUser';
import AllServices from './AllServices';
import UserManagement from './UserManagement';

const Dashboard = ({ users, user }) => {
    const adminUsers = users.filter(u => u.role === 'admin');
    const isAdmin = adminUsers.some(u => u.email === user?.email);

    console.log("usersxx", users, user, isAdmin)
    return (
        <div>
            {isAdmin ? (
                <>
                    <div className='flex text-center mb-96'>
                        <div className='w-[25%] bg-[#003366] text-[#038fdd] h-screen fixed pt-12 top-0'>
                            <div>
                                <div className='flex justify-center items-center  mt-5'>
                                    <Image
                                        src={user?.photoURL}
                                        width={45}
                                        height={45}
                                        className="rounded-full cursor-pointer me-2"
                                        alt=""
                                    />
                                    <h1 className='text-xl'> Admin Panel</h1>
                                </div>
                                <hr className='mt-0' />
                                <div className='mx-0'>
                                    {
                                        isAdmin ? (<ul className='grid md:grid-cols-2 sm:grid-cols-1 text-center md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>


                                            <>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashHome" smooth>Admin Home</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><a href="/" >Home</a></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashAllUser" smooth>All User</Link></li><li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Sales" smooth>Sales</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Marketings" smooth>Marketings</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="service" smooth>Service</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Finances" smooth>Finances</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Hr" smooth>HR</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Legal" smooth>Legal</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="securityITManagement" smooth>Security IT Management</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="bianalytics" smooth>Bi Analytics</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="projectManagement" smooth>Project Management</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="developerplatform" smooth>developerplatform</Link></li>
                                                <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="userManagement" smooth>User Management</Link></li>

                                            </>

                                        </ul>) : (<ul className='grid md:grid-cols-1 sm:grid-cols-1 text-center  md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><a href="/" >Home</a></li>
                                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><a href="#" >My Cart</a></li>
                                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><a href="#" >My Service</a></li>

                                        </ul>)
                                    }


                                </div>
                            </div>
                        </div>
                        <div className='w-[75%] bg-gradient-to-tr from-amber-400 via-cyan-500 to-[#339c53] right-0 absolute pb-20'>
                            <div className='w-[70%]'>
                                <DashBoardHome />
                            </div>
                            <div>
                                <AllUser />
                            </div>
                            <div>
                                <AllServices />
                            </div>
                            <div>
                                <UserManagement />
                            </div>
                        </div>
                    </div>

                </>
            ) : (
                <div>
                    This is user
                </div>
            )}
        </div>
    );
};

export default Dashboard;
