'use client'
import Image from 'next/image';
import { Link } from 'react-scroll';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaCartPlus } from 'react-icons/fa';
import { IoIosHome } from 'react-icons/io';
import { LuBaggageClaim } from 'react-icons/lu';

const Sidebar = () => {
    const { user } = UserAuth();
    const [users, setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                console.log("User data in component:", userData);
                // Add this line to log the user data from the database
                console.log("DatabaseUser:", userData);
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    const adminUsers = users?.filter(u => u.role === 'admin');
    const isAdmin = adminUsers.some(u => u.email === user?.email);
    console.log("Userdata", user, users, adminUsers, isAdmin)


    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fixed -top-4 md:left-0 z-50 w-[100%] md:w-[15%] md:mt-20'>
            <div className='relative md:mx-3 mx-0 bg-gradient-to-r  from-blue-600 to-cyan-500 py-3  w-full'>

                <div className='flex ps-3 gap-3 py-4  items-center mt-4'>
                    <div
                        onClick={() => handleToggle(!isOpen)}
                        className="md:hidden visible">
                        {!isOpen ? (
                            <button className="w-[50px] flex justify-center items-center top-4 left-5 h-[50px] text-white">
                                <FaTimes className="text-2xl"></FaTimes>
                            </button>
                        ) : (
                            <button className="w-[50px] flex justify-center items-center top-4 left-5 h-[50px] text-white">
                                <FaBars className="text-2xl"></FaBars>
                            </button>
                        )}
                    </div>
                    <Image
                        src={user?.photoURL}
                        width={45}
                        height={45}
                        className="rounded-full cursor-pointer me-2"
                        alt=""
                    />
                    <h1 className='text-xl'>{isAdmin ? "Admin Panel" : "User Panel"}</h1>
                </div>

                <hr className='mt-0' />
                {!isOpen &&
                    <div>
                        <div className='md:mx-3  mx-0 md:h-screen  w-full'>
                            {isAdmin ? (
                                <ul className='text-start grid grid-cols-1 md:grid-cols-1  pt-3 md:text-base text-xs md:px-0 px-2 mr-2  md:gap-y-0'>



                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><a href="/" >Home</a></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="dashHome" smooth>Admin Home</Link></li>
                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="userManagement" smooth>User Management</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="Sales" smooth>Sales</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="Marketings" smooth>Marketings</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="service" smooth>Service</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="Finances" smooth>Finances</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="Hr" smooth>HR</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="Legal" smooth>Legal</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="securityITManagement" smooth>Security IT Management</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="bianalytics" smooth>Bi Analytics</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="projectManagement" smooth>Project Management</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-purple-900 px-2  md:text-base py-1  text-xs ' style={{ transition: "0.4s" }}><Link to="developerplatform" smooth>Developer Platform</Link></li>





                                    {/* user */}

                                </ul>
                            ) : (
                                <ul className='grid md:grid-cols-1 sm:grid-cols-1 text-start pt-3 md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                                    <li className='mt-0  rounded-lg  hover:bg-blue-500 px-2  md:text-base py-1 text-xs' style={{ transition: "0.4s" }}><a href="/" className='flex items-center' ><IoIosHome className='pr-3 w-[30px] h-[30px]' />Home</a></li>

                                    <li className='mt-0  rounded-lg  hover:bg-blue-500 px-2  md:text-base py-1 text-xs' style={{ transition: "0.4s" }}><Link to="usercart" className='flex items-center' smooth><FaCartPlus className='pr-3 w-[30px] h-[30px]' />My Cart</Link></li>

                                    <li className='mt-0  rounded-lg  hover:bg-blue-500 px-2  md:text-base py-1 text-xs' style={{ transition: "0.4s" }}><Link to="myservice" className='flex items-center' smooth><LuBaggageClaim className='pr-3 w-[30px] h-[30px]' />My Service</Link></li>


                                </ul>
                            )
                            }


                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Sidebar; 