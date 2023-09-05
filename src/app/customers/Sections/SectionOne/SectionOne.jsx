import React from "react";
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


const SectionOne = () => {
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
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={fossil} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={nike} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={vodaphone} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={netflix} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={goorey} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={addidas} alt="brand-logo"/></li>
        </ul>
        <ul className="grid md:grid-cols-6 grid-cols-3">
            <li className=" md:p-16 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={amazon} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={hotstar} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={oneplus} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={mcfee} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={medlife} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={jaguar} alt="brand-logo"/></li>
        </ul>
        <ul className="grid md:grid-cols-6 grid-cols-3">
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={bata} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#E8FDF6] flex justify-center items-center"><Image className="zoom-image" src={mi} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#FBE0E6] flex justify-center items-center"><Image className="zoom-image" src={levis} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#DFFBDB] flex justify-center items-center"><Image className="zoom-image" src={siemens} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F0F0F0] flex justify-center items-center"><Image className="zoom-image" src={hp} alt="brand-logo"/></li>
            <li className=" md:p-16 p-4 bg-[#F7F7E3] flex justify-center items-center"><Image className="zoom-image" src={phillips} alt="brand-logo"/></li>
        </ul>
      </div>
    </>
  );
};

export default SectionOne;
