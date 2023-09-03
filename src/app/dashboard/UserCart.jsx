"use client"
import React, { useEffect, useState } from 'react';
import { getCarts } from '../utils/getCarts';
import { UserAuth } from '../Context/AuthContext';
import Image from 'next/image';
import { checkout } from '@/checkout';
import axios from 'axios';
import RemoveBtn from './RemoveBtn';

const UserCart = () => {
    const [carts, setCarts] = useState([]);


    const { user } = UserAuth();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartsData = await getCarts();
                setCarts(cartsData);

            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        fetchData();
    }, []);
    const filteredCarts = carts.filter((carts) => carts.email === user?.email);
    const singlecart = carts.filter(u => u.email === user?.email);
    const cartQuantity = filteredCarts.length;
    console.log("users cart", singlecart)

    const handlePayment = async () => {
        console.log('Filtered Carts:', filteredCarts);
        try {
            // Make a POST request to your API endpoint "/api/purchase"
            const response = await axios.post('/api/purchase', filteredCarts);

            // Check the response for success or handle it accordingly
            if (response.status === 201) {
                // Payment successful, you can show a success message or perform other actions
                console.log('Payment successful', response.data);
            } else {
                // Handle other response status codes as needed
                console.error('Payment failed');
            }
        } catch (error) {
            console.error('Error making payment:', error);
        }
    };




    return (
        <div className='  ' id="usercart" >
            <div className='mt-16  ' id='userManagement'>
                <div>
                    <hr className='w-full  mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold text-3xl'>MY Carts {filteredCarts.length} !!!</p>
                    <hr className='w-full mx-auto mt-5' />
                </div>
                <div className='w-5/6   mx-auto mt-20'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#222324] text-base'>
                                    <th>Index</th>

                                    <th>Service Name</th>

                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {/* rows */}
                                {Array.isArray(filteredCarts) ? (
                                    filteredCarts.map((c, index) => (
                                        <tr className='bg-white rounded-lg border-2  border-black ' key={c._id}>
                                            <th>{index + 1}</th>
                                            <td>{c?.name}</td>
                                            <Image
                                                className='rounded-full mt-2'
                                                src={c?.image}
                                                height={60}
                                                width={60}
                                                alt={`${c.name}'s Profile Photo`}
                                            />
                                            <td>{c?.email}</td>

                                            <td>
                                                <RemoveBtn id={c._id}></RemoveBtn>
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
            <div className='flex justify-evenly'>
                <div className='mt-5 pt-2 text-xl font-bold bg-white px-5 py-1'>Total Price : <span className='text-yellow-500'>{cartQuantity * 9.99}</span> $</div>
                <div><button onClick={() => {
                    handlePayment();
                    checkout({ lineItems: [{ price: "price_1NlwH8DjTTkFwOYO5XypvHUW", quantity: cartQuantity }] });
                }} className='btn btn-secondary mt-4'>Pay Now</button></div>
            </div>

        </div>
    );
};

export default UserCart;
