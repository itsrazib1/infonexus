'use client'
import React from 'react';

import CRM from "../../../../../public/crm.png"
import Mail from "../../../../../public/mail.png"
import Desk from "../../../../../public/desk.png"
import Books from "../../../../../public/books.png"
import Social from "../../../../../public/Social.png"
import Arrow from "../../../../../public/icons8-right-arrow-90-2.png"
import Analytics from "../../../../../public/analytics.jpg"
import Image from 'next/image';
import { Link } from 'react-scroll';



const PartOne = () => {
    return (
        <div className='md:relative mb-20 md:mb-72'>
            <div className='bg-[#0060B4] text-white text-center h-[450px] md:relative '>
                <h1 className="text-5xl p-6">Some of our most popular apps</h1>
                <p className='text-2xl'>Take your pick—we ve got you covered.</p>
                <div className="accessed-app-header-line p-4 mt-8"></div>

            </div>
            <div className='bg-[#e0f7f9fa] md:absolute  grid grid-cols-1 md:grid-cols-4 h-auto  mx-auto w-10/12 border-solid border-2 border-inherit mt-12 left-0 right-0 top-32  '>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={CRM} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">CRM</h2>
                        <p>Coverts leads and close   sales deals faster</p>
                        <div >
                            <Link className='hover:text-blue-500' to="sales" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>
                </div>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Mail} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Mail</h2>
                        <p>secure Email service for   teams of all sizes </p>
                        <div>
                            <Link to="Email" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>



                        </div>


                    </div>
                </div>
                <div className="flex card-side shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Desk} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Desk</h2>
                        <p>Coverts leads and close   sales deals faster</p>
                        <div>
                            <Link to="Service" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>
                </div>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={CRM} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Assist</h2>
                        <p>Remote support and unattended  remote access  software</p>
                        <div>
                            <Link to="Service" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>

                </div>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Books} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Books</h2>
                        <p>Powerful financial platform  for growing businesses</p>
                        <div>
                            <Link to="Finance" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>

                </div>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Analytics} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Analytics</h2>
                        <p>Create customs reports and  dashboards from any data set</p>
                        <div>
                            <Link to="BI" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>

                </div>
                <div className="flex card-side  shadow-xl bg-[#e8f7f8fa] ">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Analytics} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Creator</h2>
                        <p>Build custom app for  yours business needs</p>
                        <div>
                            <Link to="Security" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>

                </div>
                <div className="flex card-side  shadow-xl bg-[#e0f7f9fa]">
                    <div className='h-24 w-24 mt-8 ps-4'>
                        <figure><Image className='' src={Social} alt="Movie" /></figure>

                    </div>

                    <div className="card-body">
                        <h2 className="card-title">Social</h2>
                        <p>The all in one social media management software  dashboards from any data set</p>
                        <div>
                            <Link to="Marketing" smooth>
                                <button className='flex text-[#0060B4] py-6'>
                                    <p className='text-[#0060B4] text-xs'>TRY NOW </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-4 h-auto ms-3 hover:translate-x-[10px] transition-transform duration-400'
                                    />
                                </button>

                            </Link>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
};

export default PartOne;