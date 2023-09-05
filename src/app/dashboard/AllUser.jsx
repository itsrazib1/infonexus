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
                // console.log("User data in component:", userData); 
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div className='mt-28 box' id='dashAllUser'>
            <div className=' shadow4'>
                <hr className='w-[70%] mx-auto mt-5 mb-5' />
                <p className='text-[#c75633] font-serif font-bold text-3xl'>All User: {users.length} !!!</p>
                <hr className='w-[70%] mx-auto mt-5' />
            </div>
            <div className='w-5/6 mx-auto mt-20 box3 mb-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className='text-[#d8d65e] text-base'>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
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