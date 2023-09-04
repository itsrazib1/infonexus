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
        <div className=' text-white ' id="myservice" >
            <div className='mt-16  ' id='userManagement'>
                <div>
                    <hr className='w-full  mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold text-3xl'>MY Service {filteredCarts.length} !!!</p>
                    <hr className='w-full mx-auto mt-5' />
                </div>
                <div className='w-5/6   mx-auto mt-20'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#ffffff] text-base'>
                                    <th>Index</th>

                                    <th>Name</th>

                                    <th>Image</th>
                                    <th>Go Service</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* rows */}
                                {Array.isArray(filteredCarts) ? (
                                    filteredCarts.map((c, index) => (
                                        <tr className='  rounded-lg border-2  border-black ' key={c._id}>
                                            <th>{index + 1}</th>
                                            <td>{c?.name}</td>
                                            <Image
                                                className=' mt-4'
                                                src={c?.image}
                                                height={40}
                                                width={40}
                                                alt={`${c.name}'s Profile Photo`}
                                            />

                                            <td>
                                                <button
                                                    className="btn btn-circle btn-outline btn-success"
                                                    onClick={() => handleDelete(c._id)}
                                                >
                                                    Go
                                                </button>
                                            </td>
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
