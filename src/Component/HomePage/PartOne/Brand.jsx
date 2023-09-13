import React from 'react';
import Image from 'next/image';
import Amazon from '../../../../public/amazon.png'
import Kpmg from '../../../../public/kpmg.png'
import Renault from '../../../../public/renault.png'
import Netflix from '../../../../public/netflix.png'
import Hp from '../../../../public/hp.png'
import Facebook from '../../../../public/facebook.png'
import addidas from '../../../../public/customers-brand-logos/addidas.png'
import levis from '../../../../public/customers-brand-logos/levis.png'
import bata from '../../../../public/customers-brand-logos/bata.png'
import oneplus from '../../../../public/customers-brand-logos/oneplus.png'
import Arrow from '../../../../public/icons8-right-arrow-dark-100.png'
import Marquee from "react-fast-marquee";

const Brand = () => {
    return (
        <div className='mt-16'>
            <div className='w-52 mx-auto text-center font-medium'>
                <h3 className='border-b-2 border-[#f60014] pb-4'>BRANDS THAT TRUST US</h3>
            </div>
            <div className=''>
                
            <Marquee  className='w-full gap-10 mt-16 grid grid-cols-3 lg:grid-cols-6  justify-items-center items-center  container mx-auto'>
            <div>
                    
                    <Image
                        src={Amazon}
                        alt="Image"
                        className='w-28 mx-10 h-auto '
                    />
                </div>
                <div>
                    <Image
                        src={Kpmg}
                        alt="Image"
                        className='w-28 mx-10 h-auto '
                    />
                </div>
                <div>
                    <Image
                        src={Renault}
                        alt="Image"
                        className='w-24 mx-10 h-auto '
                    />
                </div>
                <div>
                    <Image
                        src={Netflix}
                        alt="Image"
                        className='w-20 mx-10 h-auto '
                    />
                </div>
                <div>
                    <Image
                        src={Hp}
                        alt="Image"
                        className='w-16 mx-10 h-auto '
                    />
                </div>
                <div>
                    <Image
                    src={Facebook}
                    alt="Image"
                    className='w-20 mx-10 h-auto '
                /></div>
                <div>
                    <Image
                    src={addidas}
                    alt="Image"
                    className='w-20 mx-10 h-auto '
                /></div>
                <div>
                    <Image
                    src={levis}
                    alt="Image"
                    className='w-28 mx-10 h-auto '
                /></div>
                <div>
                    <Image
                    src={bata}
                    alt="Image"
                    className='w-28 mx-10 h-auto '
                /></div>
                <div>
                    <Image
                    src={oneplus}
                    alt="Image"
                    className='w-28  mx-10 h-auto '
                /></div>
            </Marquee>
               
            </div>
            <div className='w-52 mx-auto mt-14'>
                <a className='flex justify-between' href="#">
                    <h3 className='font-medium text-blue-700'>CUSTOMER STORIES</h3>
                    <Image
                        src={Arrow}
                        alt="Image"
                        className='w-6 h-auto hover:translate-x-[10px] transition-transform duration-1000'
                    />
                </a>
            </div>
        </div>
    );
};

export default Brand;