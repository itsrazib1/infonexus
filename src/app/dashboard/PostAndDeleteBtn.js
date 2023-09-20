"use client"
import { checkout } from '@/checkout';
import React from 'react';

const PostAndDeleteBtn = ({ id, name, email, image, services, description }) => {
    const itemId = id;
    const addToServices = { name, email, image, services, description }
    console.log(addToServices)

    const handleCheckoutClick = async () => {
        fetch("api/purchase", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addToServices),
        })
        try {
            let result = await fetch(`/api/trynow/${itemId}`, {
                method: "DELETE",
            });
            result = await result.json();
        } catch (error) {
            console.error(error);
        }
        checkout({
            lineItems: [{ price: "price_1NlwH8DjTTkFwOYO5XypvHUW", quantity: 1 }]
        });
    };

    return (

        <button onClick={handleCheckoutClick}>
            <a class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                <span class="relative text-white">  Pay Now</span>
            </a>
        </button>
    );
};

export default PostAndDeleteBtn;
