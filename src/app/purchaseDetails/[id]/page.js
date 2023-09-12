'use client'
import { getPurchase } from "@/app/utils/getPurchase";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Page({ params }) {

    const id = params.id
    const [carts, setCarts] = useState([]);
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
    // console.log(carts)

    const filteredCarts = carts.filter((carts) => carts._id === id);
    return (
        <div>
            {
                filteredCarts.map((c) => (<div key={c._id} >
                    <div>
                        <h1 className="text-3xl mx-auto"> Product Name: {c.name}</h1>
                        <h1>Product description : {c.description}</h1>
                        <h1>Product details : {c.services}</h1>
                        <h1>Product details : {c.services}</h1>
                        <Image
                            className='mx-auto mt-2'
                            src={c?.image}
                            height={300}
                            width={300}
                            alt={`${c.name}'s Profile Photo`}
                        />
                    </div>
                </div>))
            }
        </div>
    )
}
