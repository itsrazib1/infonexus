"use client"

import { UserAuth } from "@/app/Context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";


const DynamicButton = ({ name, image, description, id }) => {
  const {user} = UserAuth()
  
    const [clicked, setClicked] = useState(false);  
  const handelAddToCart = () => {
    const email = user.email
    const cartItem = { name, image, description, id, email };
    console.log(cartItem)
    fetch("http://localhost:3000/api/trynow", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cartItem)
    })
    .then(() => {
        setClicked(true);
        Swal.fire({
          icon: "success",
          title: "Added to Cart",
          showConfirmButton: false,
          timer: 1500 
        });
    })
    .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error,
          text: "An error occurred while adding to cart.",
          confirmButtonText: "OK"
        });
      });
  };

  return (
    <button onClick={handelAddToCart} className={`${clicked? "text-white mt-3 font-semibold opacity-50 bg-blue-500 rounded-lg py-[8px] px-[20px]":"text-blue-500 mt-3 font-semibold rounded-lg border-solid border-2 border-blue-500 py-[8px] px-[20px]"}`} disabled={clicked} >
      {clicked ? "Added to Cart" : "Try Now"}
    </button>
  );
};

export default DynamicButton;