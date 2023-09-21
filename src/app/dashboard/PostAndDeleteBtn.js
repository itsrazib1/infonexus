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
        <button onClick={handleCheckoutClick} className='btn btn-outline btn-success md:ms-8'>Pay Now</button>
    );
};

export default PostAndDeleteBtn;
