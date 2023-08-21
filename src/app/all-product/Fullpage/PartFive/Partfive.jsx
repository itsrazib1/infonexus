import Image from "next/image";
import React from "react";
import rightArrow from "../../../../../public/icons8-right-arrow-90.png"
import browserImg from "../../../../../public/zh-browserex.png"
import mobileImg from "../../../../../public/zh-mobileapp.png"

const Partfive = () => {
  return (
    <div>
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-y-9 bg-[#2E60B3] text-white py-16">
        <div className="text-center lg:text-left">
          <h1 className="mt-4 text-2xl font-semibold">Marketplace</h1>
          <p className="mt-4 lg:text-xl">
            With over 1500 ready-to-use extensions <br /> across 40+ categories,
            connect your favorite <br /> business tools with the Info-Nexus
            products <br /> you already use.
          </p>
          <button className="flex justify-between text-white border-2 border-white px-5 py-3 mt-10 mx-auto lg:mx-0">
            <p className="uppercase">EXPLORE All</p>
            <Image
              src={rightArrow}
              alt="Image"
              className="w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000"
            />
          </button>
        </div>
        <div>
          <Image src={mobileImg} alt="Image" className="w-96 h-auto hidden md:block" />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-y-9 md:py-16">
        <div className="text-center lg:text-left">
          <h1 className="mt-4 text-2xl font-semibold">Marketplace</h1>
          <p className="mt-4 lg:text-xl">
            With over 1500 ready-to-use extensions <br /> across 40+ categories,
            connect your favorite <br /> business tools with the Info-Nexus
            products <br /> you already use.
          </p>
          <button className="flex justify-between text-white bg-[#326CB8] px-5 py-3 mt-10 mx-auto lg:mx-0">
            <p>EXPLORE</p>
            <Image
              src={rightArrow}
              alt="Image"
              className="w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000"
            />
          </button>
        </div>
        <div>
          <Image src={browserImg} alt="Image" className="w-96 h-auto hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Partfive;
