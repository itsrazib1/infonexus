'use client'
import Image from 'next/image';
import { Link } from 'react-scroll';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

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
        <div className='fixed -top-4 left-4 md:left-0 z-50 md:mt-20'>
            <div className='relative md:mx-3 mx-0  w-full'>

                <div className='flex ps-3 gap-3 items-center mt-4 box3'>
                    <div
                        onClick={() => handleToggle(!isOpen)}
                        className="  top-5 left-3 ">
                        {isOpen ? (
                            <button className="w-[50px] flex justify-center items-center absolute top-4 left-5 h-[50px] text-[#1add92]">
                                <FaTimes className="text-2xl"></FaTimes>
                            </button>
                        ) : (
                            <button className="w-[50px] flex justify-center items-center absolute top-4 left-5 h-[50px] text-[#1add92]">
                                <FaBars className="text-[#1add92] text-2xl"></FaBars>
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
            </div>
            <hr className='mt-0' />
            {isOpen &&
                <div>
                    <div className='md:mx-3 mx-0 box3 md:h-screen w-full'>
                        {
                            isAdmin ? (<ul className='text-start grid grid-cols-1 md:grid-cols-1  md:text-base text-xs md:px-0 px-2 mr-2  md:gap-y-0'>


                                <>
                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><a href="/" >Home</a></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashHome" smooth>Admin Home</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashAllUser" smooth>All User</Link></li>

                                    <li className='rounded-lg  hover:text-white px-2 my-2 mx-auto'><Link to="Sales" smooth>Sales</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Marketings" smooth>Marketings</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="service" smooth>Service</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Finances" smooth>Finances</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Hr" smooth>HR</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Legal" smooth>Legal</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="securityITManagement" smooth>Security IT Management</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="bianalytics" smooth>Bi Analytics</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="projectManagement" smooth>Project Management</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="developerplatform" smooth>Developer Platform</Link></li>

                                    <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="userManagement" smooth>User Management</Link></li>

                                </>

                                {/* user */}

                            </ul>) : (<ul className='grid md:grid-cols-1 sm:grid-cols-1 text-center  md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                                <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><a href="/" >Home</a></li>

                                <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="usercart" smooth>My Cart</Link></li>

                                <li className='mt-0  rounded-lg  hover:text-white px-2 my-2 mx-auto md:text-base  text-xs'><Link to="myService" smooth>My Service</Link></li>


                            </ul>)
                        }


                    </div>
                </div>
            }
        </div>
    );
};

export default Sidebar; 