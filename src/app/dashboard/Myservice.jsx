
"use client"
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import Image from 'next/image';

// import axios from 'axios';

import { getPurchase } from '../utils/getPurchase';
// import Link from 'next/link';
// import Details from '../purchase-details/Details';
import DetailsButton from './DetailsButton';


const MyService = () => {
    const [carts, setCarts] = useState([]);

    const { user } = UserAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartsData = await getPurchase();
                setCarts(cartsData);

            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        fetchData();
    }, []);


    const filteredCarts = carts.filter((carts) => carts.email === user?.email);






    const singlecart = carts.filter(u => u.email === user?.email);







    return (
        <div className='  ' id="myservice" >
            <div className='mt-6  ' id='userManagement'>
                <div>
                    <p className='text-pink-100 font-serif font-bold md:text-2xl text-center bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[500px] m-auto p-4 rounded-2xl ngh'>MY Service {filteredCarts.length}</p>
                </div>
                <div className='md:w-5/6   mx-auto mt-20'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#101010] text-base'>
                                    <th className='md:block hidden'>Index</th>

                                    <th>Service Name</th>

                                    <th>Image</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
                                {/* rows */}
                                {Array.isArray(filteredCarts) ? (
                                    filteredCarts.map((c, index) => (
                                        <tr className=' text-[#1b1b1c] rounded-lg border-2' key={c._id}>
                                            <th className='md:block hidden'>{index + 1}</th>
                                            <td>{c?.name}</td>
                                            <Image
                                                className='rounded-full bg-white mt-5'
                                                src={c?.image}
                                                height={40}
                                                width={40}
                                                alt={`${c}'s Profile Photo`}
                                            />

                                            <td>
                                                <DetailsButton cartData={c}></DetailsButton>
                                            </td>
                                            {/* Other table cells */}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">Loading...</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyService;
