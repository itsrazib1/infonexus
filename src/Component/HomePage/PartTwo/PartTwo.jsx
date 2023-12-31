"use client";
import Image from "next/image";
import React from "react";
import "./PartTwo.css";
import Link from "next/link";
import CountUp from "react-countup";
import Arrow from "../../../../public/icons8-right-arrow-90.png";
import imgOne from "../../../../public/part-2-img-1.svg";
import imgOnex from "../../../../public/rezualbannner.webp";
import imgTwo from "../../../../public/part-2-img-2.png";
import imgThree from "../../../../public/part-2-img-3.png";
import imgFour from "../../../../public/part-2-img-4.png";
import imgrezual from "../../../../public/rezual.jpg";
import imgFive from "../../../../public/part-2-img-5.png";
import imgSix from "../../../../public/part-2-img-6.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { motion } from "framer-motion";

const PartTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
  }, [])
  return (
    <div>
      {/* 1st part for part two */}
      <div className="main-body flex md:flex-row flex-col-reverse md:text-start text-center justify-center items-center container m-auto ">
        <div data-aos="fade-right">
          <div className="relative">
            <Image
              className="z-0"
              width={525}
              height={305}
              src={imgOne}
              alt=""
            />
            <Image
              className="bg-black md:p-4 p-2 md:w-[54px] w-[30px] rounded-full z-10 md:left-[51px] left-[28px] absolute md:bottom-[-25px] bottom-[-15px]"
              // width={52}
              // height={52}
              src={imgFour}
              alt=""
            />
          </div>
          <div className="left-bottom">
            <div>
              <div className="flex justify-evenly">
                <p className="max-w-[312px] text-[22px] text-start">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Infonexus operating system is very robust and contains the
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  collective memory of Selectras entire business."
                </p>
                <div>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <Image width={105} height={124} src={imgFive} alt="" />
                  </motion.div>
                  <Link href="/showVideo">
                    <button className="flex items-center text-[14px] gap-2 mt-5 watch-btn-img">
                      {" "}
                      <Image width={35} height={35} src={imgSix} alt="" /> Watch
                      Video
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-start">
              <h1 className="font-semibold text-[18px]">AB Ohi</h1>
              <p className="text-[14px]">Co-Founder, Selectra</p>
            </div>
          </div>
        </div>
        <div className="right-site" data-aos="fade-right">
          <h1 className="header">
            Infonexu for <br /> Enterprises
          </h1>
          <p className="details max-w-[400px]">
            Experience the breadth and depth of the Infonexu  ecosystem, with
            the professional services, infrastructure, support, and security
            that a large business needs. Streamline complex business processes,
            build strong relationships with your customers, and drive growth at
            scale.
          </p>
          <button className="touch-btn">
            <Link className="flex gap-2" href="/all-product">
              GET IN TOUCH
              <Image
                src={Arrow}
                alt="Image"
                className="w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000"
              />
            </Link>
          </button>
        </div>
      </div>
      
      {/* 2nd part for part two */}
      <div className="bg-[#0a73c0] grid md:grid-cols-5 grid-row-2 items-center md:p-0 p-7 md:py-8">
        <div></div>
        <div className="text-white md:col-start-2 col-span-2">
          <h1 className="md:text-[50px] text-[30px]">
            Business Software. <br /> Our Craft. Our Passion.
          </h1>
          <div className="grid md:grid-cols-2 grid-col-1 gap-x-10 gap-y-7">
            <div className="grid md:grid-cols-2 grid-cols-3 items-center">
              <h1 className="md:text-[45px] text-[30px] col-span-1">
                <CountUp end={90} duration={5} />
                M+
              </h1>
              <p className=" md:text-[18px] md:w-[40%] md:col-span-1 col-span-2">
                Users Globally
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-3 items-center">
              <h1 className="md:text-[45px] text-[30px] col-span-1">
                <CountUp end={150} duration={5} />+
              </h1>
              <p className="md:text-[18px] md:w-[40%] md:col-span-1 col-span-2">
                Countries Served
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-3 items-center">
              <h1 className="md:text-[45px] text-[30px] col-span-1">
                <CountUp end={12} duration={5} />
                K+
              </h1>
              <p className=" md:text-[18px] md:w-[40%] md:col-span-1 col-span-2">
                Employees Worldwide
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-3 items-center">
              <h1 className="md:text-[45px] text-[30px] col-span-1">
                <CountUp end={25} duration={5} />+
              </h1>
              <p className="md:text-[18px] md:w-[40%] md:col-span-1 col-span-2">
                Years in Business
              </p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-3 items-center">
              <h1 className="md:text-[45px] text-[30px] col-span-1">
                <CountUp end={2} duration={5} />
                K+
              </h1>
              <p className="md:text-[18px] md:w-[40%] md:col-span-1 col-span-2">
                Partners Worldwide
              </p>
            </div>
            <div>
              <Link href='/link'>
                <button className="about-btn flex gap-2 items-center justify-center px-[25px] py-[20px]">
                  More about Infonexu
                  <Image
                    src={Arrow}
                    alt="Image"
                    className="w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000"
                  />
                </button> </Link>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            className="users-section-img "
            src={imgThree}
            width={700}
            alt=""
          />
        </div>
      </div>
      {/* 3nd part for part three */}
      <div className="md:pt-[130px] pt-[50px] md:pb-[0px] pb-[80px]" data-aos="zoom-in">
        <Image className="m-auto" width={59} height={70} src={imgTwo} alt="" />
        <div className="text-center">
          <h1 className="text-[44px] mb-[15px]">
            Your privacy is our responsibility
          </h1>
          <p className="text-[18px] max-w-[720px] m-auto mb-[20px]">
            We believe that trust is paramount in a relationship. We do not own
            or sell your data, and we most certainly do not bank on
            advertising-based business models. The only way we make money is
            from the software license fees you pay us.
          </p>
          <Link href="/showVideo">
            <button className="flex items-center text-[14px] m-auto gap-2 mt-3 video-btn watch-btn-img">
              {" "}
              <Image width={35} height={35} src={imgSix} alt="" /> Watch Video
            </button>
          </Link>
          {/* <button className="video-btn flex items-center m-auto watch-btn-img">
            <Image
              className=""
              width={18}
              height={18}
              src="https://i.ibb.co/9rggVbr/zh-newhome-sprite2.png"
              alt=""
            />
            WATCH VIDEO
          </button> */}
        </div>
      </div>
      {/* 2nd part for part two.2 */}
      <div className="main-body flex md:flex-row-reverse flex-col-reverse md:text-start text-center justify-center items-center container m-auto ">
        <div data-aos="fade-right">
          <div className="relative">
            <Image
              className="z-0 h-[305px] w-[500px]"
              src={imgOnex}
              alt=""
            />
            <Image
              className="bg-black md:p-4 p-2 md:w-[54px] w-[30px]  rounded-full z-10 md:left-[51px] left-[28px] absolute md:bottom-[-25px] bottom-[-15px]"
              // width={52}
              // height={52}
              src={imgFour}
              alt=""
            />
          </div>
          <div className="left-bottom">
            <div>
              <div className="flex justify-evenly">
                <p className="max-w-[312px] text-[22px] text-start">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  "Infonexus operating system is very robust and contains the
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  collective memory of Selectras entire business."
                </p>
                <div>
                  <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                    <Image width={105} height={124} src={imgrezual} alt="" />
                  </motion.div>
                  <Link href="/showVideo">
                    <button className="flex items-center text-[14px] gap-2 mt-5 watch-btn-img">
                      {" "}
                      <Image width={35} height={35} src={imgSix} alt="" /> Watch
                      Video
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-start">
              <h1 className="font-semibold text-[18px]">Md. Rezual</h1>
              <p className="text-[14px]">Designer</p>
            </div>
          </div>
        </div>
        <div className="right-site" data-aos="fade-right">
          <h1 className="header">
            Infonexu for <br /> Business
          </h1>
          <p className="details max-w-[400px]">
            Experience the breadth and depth of the Infonexu  ecosystem, with
            the professional services, infrastructure, support, and security
            that a large business needs. Streamline complex business processes,
            build strong relationships with your customers, and drive growth at
            scale.
          </p>
          <button className="touch-btn">
            <Link className="flex gap-2" href="/all-product">
              GET IN TOUCH
              <Image
                src={Arrow}
                alt="Image"
                className="w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000"
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartTwo;
