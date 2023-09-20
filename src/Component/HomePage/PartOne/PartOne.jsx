'use client'
import Image from 'next/image';
import Arrow from '../../../../public/icons8-right-arrow-dark-100.png'
import Banner from '../../../../public/zh-homev2-banner.webp'
import CRM from '../../../../public/crm.jpg'
import Mail from '../../../../public/mail.png'
import Books from '../../../../public/books.png'
import Desk from '../../../../public/desk.png'
import Campaigns from '../../../../public/campaigns.png'
import React from 'react';
import BannerSection from './BannerSection';
import Brand from './Brand';
import Buttonp1 from './buttonp1';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PartOne = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className='mt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-start px-4 lg:px-14 pb-14 gap-4 lg:container lg:mx-auto'>
                <div className='col-span-2 leading-tight' data-aos="fade-down">
                    <h1 className='text-3xl lg:text-5xl leading-normal'>Your life is work, <br />
                        powered by our life is work</h1>

                    <p className='text-lg lg:text-2xl mt-6'>A unique and powerful software suite to transform <br /> the way you work. Designed for businesses of all sizes, built <br /> by a company that <span className='border-b border-dashed border-black hover:text-[#03a9f5]  ease-linear duration-300 hover:border-[#03a9f5]'><a href="#">values your privacy.</a></span></p>
                    <Buttonp1></Buttonp1>

                    <Image
                        src={Banner}
                        alt="Image"
                        className='lg:max-w-5xl bg-white h-auto lg:-ms-20 mt-2 '
                    />
                </div>
                <div className=" text-black rounded-tl-3xl border border-[#e7ebf0] px-6 pb-6 lg:w-full lg:px-8" data-aos="fade-up">
                    <p className='text-base font-bold mt-6'>FEATURED APPS</p>
                    <div className='mt-8'>
                        <Link href='/all-product'>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={CRM}
                                    alt="Image"
                                    className='w-10 h-auto'
                                />
                                <div className='ms-3'>
                                    <h1 className='text-2xl font-semibold'>CRM</h1>
                                    <p>Convert leads and close sales deals faster.</p>
                                </div>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </div>
                        </Link>
                        <Link href='/all-product'>
                            <div className='flex justify-center items-center mt-6'>
                                <Image
                                    src={Mail}
                                    alt="Image"
                                    className='w-10 h-auto'
                                />
                                <div className='ms-3'>
                                    <h1 className='text-2xl font-semibold'>Mail</h1>
                                    <p>Secure email service for your business.</p>
                                </div>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </div>
                        </Link>
                        <Link href='/all-product'>
                            <div className='flex justify-center items-center mt-6'>
                                <Image
                                    src={Books}
                                    alt="Image"
                                    className='w-8 h-auto'
                                />
                                <div className='ms-3'>
                                    <h1 className='text-2xl font-semibold'>Books</h1>
                                    <p>Powerful financial platform for growing businesses.</p>
                                </div>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </div>
                        </Link>
                        <Link href='/all-product'>
                            <div className='flex justify-center items-center mt-6'>
                                <Image
                                    src={Desk}
                                    alt="Image"
                                    className='w-10 h-auto'
                                />
                                <div className='ms-3'>
                                    <h1 className='text-2xl font-semibold'>Desk</h1>
                                    <p>Helpdesk software to deliver great customer support.</p>
                                </div>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </div>
                        </Link>
                        <Link href='/all-product'>
                            <div className='flex justify-center items-center mt-6'>
                                <Image
                                    src={Campaigns}
                                    alt="Image"
                                    className='w-10 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                                <div className='ms-3'>
                                    <h1 className='text-2xl font-semibold'>Campaigns</h1>
                                    <p>Create, send, and track targeted email campaigns that drive sales.</p>
                                </div>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </div>
                        </Link>

                    </div>
                    <div className='mt-14 rounded-lg text-center bg-base mb-2 border border-[#e7ebf0] px-4 lg:px-10 py-6'>
                        <a className='flex justify-between text-black font-bold' href="/all-product">
                            <h1>EXPLORE ALL PRODUCTS</h1>
                            <Image
                                src={Arrow}
                                alt="Image"
                                className='w-6  h-auto hover:translate-x-[10px] transition-transform duration-1000'
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* part by part  */}
            <BannerSection />
            <Brand />
        </div>
    );
};

export default PartOne;