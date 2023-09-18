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
                        <h1 className="text-3xl  gap-5 py-5 text-center">{c.name}</h1>
                        <h1 className="text-center mx-5 pb-5">{c.description}</h1>
                        <div className=" border items-center border-black mx-5 grid grid-cols-1 md:grid-cols-2 ">
                            <div className="px-10 text-xl my-10">
                            <h1> {c.services}</h1>
                            </div>
                            <div className="px-10">
                            <Image
                            className='mx-auto mt-2'
                            src={c?.image}
                            height={300}
                            width={300}
                            alt={`${c.name}'s Profile Photo`}
                        />
                            </div>
                        </div>
                        
                        
                        {console.log("filteredCartsxx",filteredCarts)}
                    </div>
                </div>))
            }
        </div>
    )
}
