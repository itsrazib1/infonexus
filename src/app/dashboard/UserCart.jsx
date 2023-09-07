"use client"
import React, { useEffect, useState } from 'react';
import { getCarts } from '../utils/getCarts'; // Import getCarts and deleteCart from your API or service
import { UserAuth } from '../Context/AuthContext';
import Image from 'next/image';
import { checkout } from '@/checkout';
import DeleteUserCart from './DeleteUserCart';
import axios from 'axios';


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
            // Log the data just before making the POST request
            console.log('Sending data to server:', filteredCarts);

            // Make a POST request to your API endpoint "/api/purchase" with filteredCarts as the request body
            const response = await axios.post('/api/purchase', { cartItems: filteredCarts });

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


    const handleDeleteCartItem = (itemId) => {
        // Filter out the deleted item from the carts state
        const updatedCarts = carts.filter((cart) => cart._id !== itemId);
        setCarts(updatedCarts);
    };



    return (
        <div className='min-h-screen box mt-28 ' id="usercart" >
            <div className='' id='userManagement'>
                <div className='shadow4'>
                    <hr className='w-full  mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold text-3xl'>MY Carts {filteredCarts.length} !!!</p>
                    <hr className='w-full mx-auto mt-5' />
                </div>
                <div className='mt-28 box3 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 pb-20'>
                    {Array.isArray(filteredCarts) ? (
                        filteredCarts.map((c, index) => (<div key={c._id} className="card w-64 glass">
                            <figure className="px-10 pt-10">
                                <Image
                                    className='rounded-full mt-2'
                                    src={c?.image}
                                    height={50}
                                    width={50}
                                    alt={`${c.name}'s Profile Photo`}
                                />
                            </figure>
                            <p className='bg-[#2d778a] mt-4 text-xl'>{index + 1}</p>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Service Name: {c?.name}</h2>
                                <p>User Email: {c?.email}</p>
                                <div className="card-actions mt-5">
                                    <DeleteUserCart id={c._id} onDelete={handleDeleteCartItem} />
                                </div>
                            </div>
                        </div>))
                    ) : (
                        <tr>
                            <td colSpan="4">Loading...</td>
                        </tr>
                    )
                    }
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 box3'>
                <div className='mt-5 pt-2 text-xl font-bold box3 px-5 py-1'>Total Price : <span className='text-yellow-500'>{cartQuantity * 9.99}</span> $</div>
                <div className='box3'><button
                    onClick={() => {
                        handlePayment();
                        checkout({ lineItems: [{ price: "price_1NlwH8DjTTkFwOYO5XypvHUW", quantity: cartQuantity }] });
                    }}
                    className='btn btn-secondary mt-4'
                >
                    Pay Now
                </button>
                </div>
            </div>

        </div>
    );
};

export default UserCart;