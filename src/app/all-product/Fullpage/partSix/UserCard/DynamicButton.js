"use client";

import { UserAuth } from "@/app/Context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";

const DynamicButton = ({ name, image, description, id }) => {
  const { user } = UserAuth();
  const [clicked, setClicked] = useState(false);

  const handelAddToCart = () => {
    const email = user?.email; // Ensure user.email exists
    if (!email) {
      // Handle the case where user.email is missing
      return;
    }
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("description", description);
    // formData.append("id", id);
    // formData.append("image", image);

    const cartItem = { name, image, description, id, email };
    console.log(image)
    console.log(description)


    fetch("/api/trynow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),

      // fetch("/api/trynow", {
      //   method: "POST",

      //   body: formData,
    })
      .then(() => {
        setClicked(true);
        Swal.fire({
          icon: "success",
          title: "Added to Cart",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error adding to cart:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while adding to cart.",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <button
      onClick={handelAddToCart}
      className={`${clicked
        ? "text-white mt-3 font-semibold opacity-50 bg-blue-500 rounded-lg py-[8px] px-[20px]"
        : "text-blue-500 mt-3 font-semibold rounded-lg border-solid border-2 border-blue-500 py-[8px] px-[20px]"
        }`}
      disabled={clicked}
      aria-label={clicked ? "Added to Cart" : "Try Now"}
    >
      {clicked ? "Added to Cart" : "Try Now"}
    </button>
  );
};

export default DynamicButton;
