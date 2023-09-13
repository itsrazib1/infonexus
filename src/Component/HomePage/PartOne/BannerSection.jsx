import Image from 'next/image';
import Work from '../../../../public/work.png'
import Workplace from '../../../../public/workplace.png'
import Arrow from '../../../../public/icons8-right-arrow-90.png'
import One from '../../../../public/One.png'
import Icon from '../../../../public/left-quotes.png'
import Dolan from '../../../../public/partonetambuli.png'
import React from 'react';
import Link from 'next/link';

const BannerSection = () => {
    return (
        <div className='lg:mt-40'>
            <div className='lg:relative'>
                <div className='lg:absolute lg:-top-28 lg:left-0 lg:right-0'>
                    <div className='bg-[#fff] border border-[#e7ebf0] w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-9 relative'>
                        <div>
                            <div className='text-white bg-green-700 px-2 text-sm absolute top-0 left-0'>
                                <h3>SPOTLIGHT
                                </h3>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image
                                    src={Work}
                                    alt="Image"
                                    className='w-28 h-auto'
                                />
                                <h3 className='text-2xl font-semibold'>Workplace</h3>
                            </div>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-xl'>Business email, chat, files, and meetings—in one place.</h3>
                            <Link href='/all-product'>
                                <button className='flex justify-between text-white bg-[#056cb8] px-8 py-4 mt-5 mx-auto lg:mx-0'>
                                    <p>TRY FOR FREE </p>
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image
                                src={Workplace}
                                alt="Image"
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                </div>
                <div className=' bg-[#37a8ff] text-black'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start gap-9 pb-28 pt-10 lg:pt-60 mt-10'>
                        <div className='lg:flex justify-center text-center lg:text-left'>
                            <div>
                                <Image
                                    src={One}
                                    alt="Image"
                                    className='w-28 h-auto mx-auto lg:mx-0'
                                />
                            </div>
                            <div className='font-semibold'>
                                <p>All-in-one suite</p>
                                <h1 className='text-5xl'>Info-Nexus One</h1>
                                <p className='text-lg'>The operating system for business</p>
                                <p className='font-normal mt-10'>Run your entire business on InfoNexus with our unified cloud <br /> software, designed to help you break down silos between <br /> departments and increase organizational efficiency.</p>
                                <Link href='/all-product'>
                                    <button className='flex justify-between text-white bg-[#f60014] px-5 py-3 mt-10 mx-auto lg:mx-0'>
                                        <p>TRY INFO-NEXUS ONE </p>
                                        <Image
                                            src={Arrow}
                                            alt="Image"
                                            className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                        />
                                    </button></Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={Icon}
                                alt="Image"
                                className='w-16 h-auto bg-white p-3 rounded-full mx-auto lg:mx-0'
                            />
                            <h1 className='text-2xl mt-8'>InfoNexus One has brought our <br /> company closer together.</h1>
                            <div className='flex justify-between items-center mt-10'>
                                <div>
                                    <Image
                                        src={Dolan}
                                        alt="Image"
                                        className='w-24 h-auto '
                                    />
                                </div>
                                <div>
                                    <h1 className='text-xl font-medium'>Shrabon Tambuli</h1>
                                    <p>Head of CRM, Purolite</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;