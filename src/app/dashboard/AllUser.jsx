"use client"
import { useEffect, useState } from "react";
import { getusers } from "../utils/getusers";
import Image from "next/image";

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers(); 
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div className='md:mt-28' id='dashAllUser'>
                <p className='text-white font-serif font-bold md:text-3xl ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>All User</p>
            <div className='md:w-4/5 text-white bg-violet-600 rounded-xl mx-auto mt-20 mb-10'>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr className='text-[#d8d65e] text-base'>
                                <th>Index</th>
                                <th>Name</th>
                                <th className="md:block hidden">Email</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td className="md:block hidden">{user?.email}</td>
                                    <td>
                                        <Image
                                            className='rounded-full'
                                            src={user.photo}
                                            height={40}
                                            width={40}
                                            alt={`${user.name}'s Profile Photo`}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;