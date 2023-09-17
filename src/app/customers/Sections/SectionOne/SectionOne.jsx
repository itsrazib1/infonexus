"use client"
import React, { useEffect, useState } from "react";
import "./SectionOne.css"
import Image from "next/image";
import fossil from "../../../../../public/customers-brand-logos/fossil.png"
import vodaphone from "../../../../../public/customers-brand-logos/vodaphone.png"
import addidas from "../../../../../public/customers-brand-logos/addidas.png"
import netflix from "../../../../../public/customers-brand-logos/netflix.png"
import goorey from "../../../../../public/customers-brand-logos/goorey.png"
import nike from "../../../../../public/customers-brand-logos/nike.png"
import jaguar from "../../../../../public/customers-brand-logos/jaguar.png"
import mcfee from "../../../../../public/customers-brand-logos/mcfee.png"
import hotstar from "../../../../../public/customers-brand-logos/hotstar.png"
import oneplus from "../../../../../public/customers-brand-logos/oneplus.png"
import medlife from "../../../../../public/customers-brand-logos/medlife.png"
import amazon from "../../../../../public/customers-brand-logos/amazon.png"
import bata from "../../../../../public/customers-brand-logos/bata.png"
import hp from "../../../../../public/customers-brand-logos/hp.png"
import levis from "../../../../../public/customers-brand-logos/levis.png"
import mi from "../../../../../public/customers-brand-logos/mi.png"
import phillips from "../../../../../public/customers-brand-logos/philips.png"
import siemens from "../../../../../public/customers-brand-logos/siemens.png"
import { getPurchase } from "@/app/utils/getPurchase";


const SectionOne = () => {



    const [Purchase, setPurchaseData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getPurchase();
            console.log("Fetched data:", data); // Log the fetched data
            setPurchaseData(data);
          } catch (error) {
            console.error('Error fetching BI & Analytics data:', error);
          }
        };
      
        fetchData();
      }, []);
  return (
    <>
      <div className="text-center mt-16">
        <h1 className="md:text-[52px] text-3xl mb-4 font-bold">Trusted by over <span className="text-gradient">90 Million Users</span> globally</h1>
        <h6 className="md:text-xl text-base">
          The world’s leading companies trust Zoho to run their different
          business operations.
        </h6>
      </div>
      <div className="mt-12">
        <ul className="grid md:grid-cols-6 grid-cols-3">
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={fossil} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={nike} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={vodaphone} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={netflix} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={goorey} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={addidas} alt="brand-logo"/></li>
        </ul>
        <ul className="grid md:grid-cols-6 grid-cols-3">
            <li className=" md:p-16 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={amazon} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={hotstar} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={oneplus} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={mcfee} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={medlife} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={jaguar} alt="brand-logo"/></li>
        </ul>
        <ul className="grid md:grid-cols-6 grid-cols-3">
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={bata} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={mi} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={levis} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={siemens} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={hp} alt="brand-logo"/></li>
            <li className=" md:p-8 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={phillips} alt="brand-logo"/></li>
        </ul>
      </div>
      <tbody className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-3 mx-10 items-center '>
                                {/* rows */}
                                {Array.isArray(Purchase) ? (
                                    Purchase.map((c, index) => (
                                        <tr className='h-[250px] rounded-lg py-16 border-2 border-black card text-center' key={c._id}>
                                            <td>Services Name:{c?.name}</td>
                                            <td>User Email:{c?.email}</td>

                                            <Image
                                                className='rounded-full mx-auto  bg-white mt-5'
                                                src={c?.image}
                                                height={80}
                                                width={80}
                                                alt={`${c}'s Profile Photo`}
                                            />
                                            {/* Other table cells */}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">Loading...</td>
                                    </tr>
                                )}
                            </tbody>

    </>
  );
};

export default SectionOne;
