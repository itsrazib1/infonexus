'use client'
import Image from 'next/image';
import Arrow from '../../../../../public/icons8-right-arrow-dark-100.png'
import CRM2 from '../../../../../public/crm_plus-.png'
import Finance from '../../../../../public/finance_plus.png'
import People from '../../../../../public/people_plus.png'
import Work from '../../../../../public/work.png'
import IT from '../../../../../public/it_management.png'
import Marketing from '../../../../../public/marketing-plus.png'
import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Info_One from './Info_One';

const PartFour = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className='mt-10 px-4 lg:px-14'>
                <div className='px-4 lg:px-14'>
                    <h1 className='text-2xl'>Suites</h1>
                    <p>The perfect combination of apps to help you with every aspect of your business.</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center gap-10 mt-24'>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl" data-aos="fade-up">
                        <figure className="ps-4">
                            <Image
                                src={CRM2}
                                alt="Image"
                                className='w-24 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                CRM Plus</h2>
                            <p>Unified platform to deliver top-notch customer experience.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl" data-aos="fade-up">
                        <figure className="ps-4">
                            <Image
                                src={Finance}
                                alt="Image"
                                z className='w-24 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Finance Plus</h2>
                            <p>All-in-one suite to manage your operations and finances.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl" data-aos="fade-up">
                        <figure className="ps-4">
                            <Image
                                src={People}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                People Plus</h2>
                            <p>Comprehensive HR platform for seamless employee experiences.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl" data-aos="fade-up">
                        <figure className="ps-4">
                            <Image
                                src={Work}
                                alt="Image"
                                className='w-28 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Workplace</h2>
                            <p>Application suite built to improve team productivity and collaboration.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl" data-aos="fade-up">
                        <figure className="ps-4">
                            <Image
                                src={IT}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                IT Management</h2>
                            <p>Everything you need to help you align IT to business.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card items-start w-80 lg:h-72 bg-base-100 shadow-xl relative" data-aos="fade-up">
                        <h1 className='bg-green-600 px-2 text-white text-sm absolute right-0 top-0'>NEW</h1>
                        <figure className="ps-4">
                            <Image
                                src={Marketing}
                                alt="Image"
                                className='w-28 h-auto'
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Marketing Plus</h2>
                            <p>Unified marketing platform for marketing teams.</p>
                            <div className="card-actions mt-4">
                                <button className="text-primary flex justify-between items-center">TRY NOW
                                    <Image
                                        src={Arrow}
                                        alt="Image"
                                        className='ms-2 w-4 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Info_One />
            </div>
        </>
    );
};

export default PartFour;