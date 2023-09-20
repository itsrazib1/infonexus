"use client";
import React, { useEffect, useState } from "react";
import { getCarts, deleteCart } from "../utils/getCarts"; // Import getCarts and deleteCart from your API or service
import { UserAuth } from "../Context/AuthContext";
import Image from "next/image";
import { checkout } from "@/checkout";
import DeleteUserCart from "./DeleteUserCart";
import PostAndDeleteBtn from "./PostAndDeleteBtn";

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

    const singlecart = carts.filter((u) => u.email === user?.email);
    console.log("users cart", singlecart);
    const cartQuantity = filteredCarts.length;

    const handlePayment = async () => {
        console.log("Filtered Carts:", filteredCarts);
        try {
            // Make a POST request to your API endpoint "/api/purchase"
            const response = await axios.post("/api/purchase", filteredCarts);

            // Check the response for success or handle it accordingly
            if (response.status === 201) {
                // Payment successful, you can show a success message or perform other actions
                console.log("Payment successful", response.data);
            } else {
                // Handle other response status codes as needed
                console.error("Payment failed");
            }
        } catch (error) {
            console.error("Error making payment:", error);
        }
    };

    return (
        <div className="min-h-screen mt-8 " id="usercart">
            <div className="" id="userManagement">
                <div className="">
                    <p className="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  shadow4  md:w-[300px] font-bold md:text-4xl py-5">
                        MY Carts
                    </p>
                    <p className="text-pink-100 font-serif font-bold md:text-2xl mt-6 text-center bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[500px] m-auto p-4 rounded-2xl ngh">
                        Your selected product number: {filteredCarts.length}
                    </p>
                </div>
                <div className=" w-4/5 m-auto mt-4">
                    <div className=" overflow-x-auto">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Image</th>
                                    <th>Service</th>
                                    <th>Pay Now</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className="gap-1">
                                {Array.isArray(filteredCarts) ? (

                                    filteredCarts.map((c, index) => (
                                        <tr key={c._id} className=" text-white  glass bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 ">
                                            <td>{index + 1}</td>
                                            <Image
                                                className="rounded-xl my-2 bg-white"
                                                src={c?.image}
                                                height={50}
                                                width={50}
                                                alt={`${c.name}'s Profile Photo`}
                                            />
                                            <td>{c?.name}</td>
                                            <td><PostAndDeleteBtn id={c._id} name={c.name} email={c.email} image={c.image} /></td>
                                            <td><DeleteUserCart id={c._id} /></td>
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
            <div className="grid bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90  grid-cols-1 rounded-xl md:grid-cols-2 w-4/5 mt-2 m-auto justify-items-center gap-5">

                <div className="">
                    <div className=" text-xl text-white font-bold px-5 py-3">
                        Single Price :{" "}
                        <span className="text-yellow-500"> 9.99</span> $
                    </div>
                </div>
                <div className=" text-xl text-white font-bold  px-5 py-3">
                    Total Price :{" "}
                    <span className="text-yellow-500">{cartQuantity * 9.99}</span> $
                </div>
            </div>
        </div>
    );
};

export default UserCart;