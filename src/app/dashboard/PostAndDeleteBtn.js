"use client"
import { checkout } from '@/checkout';
import React from 'react';
import { UserAuth } from '../Context/AuthContext';

const PostAndDeleteBtn = ({id, name, email, image}) => {
    const itemId = id;
    const addToServices = {name, email, image}
    console.log(addToServices)

    const handleCheckoutClick = async() => {
        fetch("api/purchase", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addToServices),
          })
        try {
        let result = await fetch(`http://localhost:3000/api/trynow/${itemId}`, {
            method: "DELETE",
        });
        result = await result.json();
        } catch (error) {
        console.error(error);
        }
     checkout({
            lineItems: [{ price: "price_1NlwH8DjTTkFwOYO5XypvHUW", quantity: 1   }]
        });
    };

    return (
        <button onClick={handleCheckoutClick} className='btn btn-secondary'>Pay Now</button> 
    );
};

export default PostAndDeleteBtn;
