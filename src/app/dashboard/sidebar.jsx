'use client'
import Image from 'next/image';
import { Link } from 'react-scroll';
import { UserAuth } from '../Context/AuthContext';
import { getusers } from '../utils/getusers';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const { user } = UserAuth();
    const [users, setUsers] = useState([]);

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
    return (
        <div>
            <div className='flex justify-center items-center mt-4 box3'>
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
            <div className='mx-0 box3 h-screen'>
                {
                    isAdmin ? (<ul className='grid md:grid-cols-2 sm:grid-cols-1 text-center md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>


                        <>
                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashHome" smooth>Admin Home</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="dashAllUser" smooth>All User</Link></li>

                            <li className='mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto'><Link to="Sales" smooth>Sales</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Marketings" smooth>Marketings</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="service" smooth>Service</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Finances" smooth>Finances</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="EmailCollaboration" smooth>Email Collaboration</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Hr" smooth>HR</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="Legal" smooth>Legal</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="securityITManagement" smooth>Security IT Management</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="bianalytics" smooth>Bi Analytics</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="projectManagement" smooth>Project Management</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="developerplatform" smooth>Developer Platform</Link></li>

                            <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="userManagement" smooth>User Management</Link></li>

                        </>

                    </ul>) : (<ul className='grid md:grid-cols-1 sm:grid-cols-1 text-center  md:text-base sm:text-xs md:px-0 sm:px-0 mr-2'>

                        <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="/" smooth>Home</Link></li>

                        <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="usercart" smooth>My Cart</Link></li>

                        <li className='mt-0 md:mt-5 rounded-lg hover:bg-[#b1b8b1] hover:text-black px-2 my-2 mx-auto md:text-base  text-xs'><Link to="myService" smooth>My Service</Link></li>


                    </ul>)
                }


            </div>
        </div>
    );
};

export default Sidebar; 