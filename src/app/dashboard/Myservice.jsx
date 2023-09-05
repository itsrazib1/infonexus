"use client"
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import Image from 'next/image';
import { getPurchase } from '../utils/getPurchase';

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

    const handleDelete = async (cartId) => {
        try {
            // Call your deleteCart function here with the cartId
            await deleteCart(cartId);

            // Update the state to reflect the removed cart item
            setCarts((prevCarts) => prevCarts.filter((cart) => cart._id !== cartId));
        } catch (error) {
            console.error("Error deleting cart item:", error);
        }
    };
    const singlecart = carts.filter(u => u.email === user?.email);
    
    console.log("users cart", singlecart)

    
    
    
      

    return (
        <div className='box mt-28' id="myService" >
            <div className='' id='userManagement'>
                <div className='shadow4'>
                    <hr className='w-[70%]  mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold text-3xl'>MY Service {filteredCarts.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-full box3 mx-auto mt-20'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#222324] text-base'>
                                    <th>Index</th>

                                    <th>Service Name</th>

                                    <th>Image</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* rows */}
                                {Array.isArray(filteredCarts) ? (
                                    filteredCarts.map((c, index) => (
                                        <tr className=' rounded-lg border-2  border-black ' key={c._id}>
                                            <th>{index + 1}</th>
                                            <td>{c?.name}</td>
                                            <Image
                                                className='rounded-full mt-5'
                                                src={c?.image}
                                                height={40}
                                                width={40}
                                                alt={`${c.name}'s Profile Photo`}
                                            />

                                            <td>
                                                <button
                                                    className="btn btn-circle btn-outline btn-error"
                                                    onClick={() => handleDelete(c._id)}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
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
