import Image from 'next/image';
import React from 'react';
import One from '../../../../../public/One.png'
import Arrow from '../../../../../public/icons8-right-arrow-90.png'
import One2 from '../../../../../public/one2.jpg'
import Mark from '../../../../../public/marketplace-big.png'
import Mark2 from '../../../../../public/marketplace3.png'

const Info_One = () => {
    return (
        <div>
            <div className='mt-20 bg-[#fed600]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start gap-9 py-14 lg:py-28'>
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
                            <h1 className='text-2xl lg:text-5xl mt-4'>Info-Nexus One</h1>
                            <p className='text-lg mt-4'>The operating system for business</p>
                            <p className='font-normal mt-10'>Run your entire business on Info-Nexus with our unified cloud <br /> software, designed to help you break down silos between <br /> departments and increase organizational efficiency.</p>
                            <button className='flex justify-between text-white bg-black px-5 py-3 mt-10 mx-auto lg:mx-0'>
                                <p>TRY INFO-NEXUS ONE </p>
                                <Image
                                    src={Arrow}
                                    alt="Image"
                                    className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                                />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={One2}
                            alt="Image"
                            className='w-full h-auto '
                        />
                    </div>
                </div>
            </div>
            <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-y-9'>
                <div className='text-center lg:text-left'>
                    <Image
                        src={Mark2}
                        alt="Image"
                        className='w-16 h-auto mx-auto lg:mx-0 '
                    />
                    <h1 className='mt-4 text-2xl font-semibold'>Marketplace</h1>
                    <p className='mt-4 lg:text-xl'>With over 1500 ready-to-use extensions <br /> across 40+ categories, connect your favorite <br /> business tools with the Info-Nexus products <br /> you already use.</p>
                    <button className='flex justify-between text-white bg-primary px-5 py-3 mt-10 mx-auto lg:mx-0'>
                        <p>EXPLORE MARKETPLACE </p>
                        <Image
                            src={Arrow}
                            alt="Image"
                            className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                        />
                    </button>
                </div>
                <div>
                    <Image
                        src={Mark}
                        alt="Image"
                        className='w-96 h-auto '
                    />
                </div>
            </div>
        </div>
    );
};

export default Info_One;