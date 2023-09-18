'use client'
import React from 'react';
import Image from 'next/image';
import Image1 from '../../../../public/partThree1.webp';
import Image2 from '../../../../public/partThreerazib.jpg';
import handshake from '../../../../public/handshake.png';
import target from '../../../../public/target.png';
import care from '../../../../public/social-care.png';
import arrow from '../../../../public/right-arrow.png';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { motion } from 'framer-motion';

const PartThree = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])
    return (
        <div>
            <div className=" sm:h-[1980px] md:h-[950px] bg-base-100  ">

                <div className="mx-auto w-[95%]  ">
                    <Image
                        src={Image1}
                        alt="Image"

                        objectFit="cover"
                        className=' h-2/3 '
                    />
                    <div className=' justify-center items-center flex'>
                        <div className=" py-5  h-full    w-2/3 sm:-mt-20 md:-mt-80 bg-base-100    z-10">
                            <h1 className=' text-center md:py-16 sm:text-3xl md:text-5xl'>The core values and <br /> principles that drive us</h1>
                            <div className=" sm:grid-cols-none  md:grid md:grid-cols-3 gap-7 sm:px-0 md:px-10">
                                {/* Column 1 */}
                                <div className=" p-4" data-aos="fade-down">
                                    <Image
                                        src={handshake}
                                        alt="Image"
                                        className=' h-16 w-16 mx-auto rounded-full border-black border-2'
                                    />
                                    <h3 className="mb-2 sm:text-base md:text-3xl">Long-term commitment</h3>
                                    <h4 className='md:text-lg sm:text-xs '>25 years of running a profitable organization gives us a good sense of challenges that a growing business faces. We take pride in running a sustainable business thats powered by you, our customer.</h4>

                                </div>

                                {/* Column 2 */}
                                <div className=" p-4" data-aos="fade-up">
                                    <Image
                                        src={target}
                                        alt="Image"
                                        className=' h-16 w-16 mx-auto  '
                                    />
                                    <h3 className="mb-2 sm:text-base md:text-3xl">Focus on research & development</h3>
                                    <h4 className='text-lg'>Software is our craft and we back it up with our relentless investments in R&D. So much so that we prefer to own the entire technology stack, including running our data centers globally.</h4>

                                </div>

                                {/* Column 3 */}
                                <div className=" p-4" data-aos="fade-down">
                                    <Image
                                        src={care}
                                        alt="Image"
                                        className=' h-16 w-16 mx-auto '
                                    />
                                    <h3 className="mb-2 sm:text-base md:text-3xl">Customer-first philosophy</h3>
                                    <h4 className='text-lg'>In all these years, it is our customers trust and goodwill that has helped us establish a strong position in the market. No matter the size of your business, we are here to help you grow.</h4>

                                </div>



                            </div>
                            <div className='justify-center items-center flex'>
                                <div className=' flex ' data-aos="flip-left">
                                    <Link href='/link'> <button className="bg-blue-700 text-white px-4 py-3 ">READ OUR STORY  </button></Link>

                                    <div className='bg-blue-700 pr-4'>
                                        <Image
                                            src={arrow}
                                            alt="Image"
                                            className=' h-8 w-5 pt-[14px] hover:translate-x-[8px] transition-transform duration-1000'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>



            <div className=" md:mt-0  bg-slate-100  md:h-[650px]">
                <div className="hero  min-h-screen bg-base-200">
                    <div className="hero-content  flex-col md:flex-row-reverse">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}  className='w-1/3' data-aos="flip-right">
                                <Image
                                    src={Image2}
                                    alt="Image"
                                    className=' sm:w-full md:w-5/5 '
                                />
                            </motion.div>

                        <div className='sm:w-4/5 md:w-2/3'>
                            <div data-aos="flip-left">
                                <h3 className='bg-gray-800 text-white w-24 mb-12 px-2 text-2xl'>Forbes</h3>
                                <h1 className="text-5xl ">Vision from a village</h1>
                                <p className="py-6">Why InfoNexus is CEO moved from California to a hamlet in Tamil Nadu: <br /> The lessons this holds for an economy that wants to be self-reliant; for <br /> corporations headquartered in big cities; and a country with a high <br /> density of urban and migrant workers coming to grips with a <br /> pandemic.</p>
                            </div>

                            <div className=' flex'>
                                <div className=' flex border-2 py-2 border-blue-700  text-blue-600 px-4' data-aos="flip-right">
                                    <Link href='/link'> <button className="pr-2 font-semibold">MORE ON FORBES</button></Link>

                                    <div className=' mt-[4px] '><Image
                                        src={arrow}
                                        alt="Image"
                                        className=' h-4 w-4  hover:translate-x-[10px] transition-transform duration-1000'
                                    /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PartThree;