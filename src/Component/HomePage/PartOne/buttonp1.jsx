"use client";
import { UserAuth } from '@/app/Context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Buttonp1 = () => {
    const {user} = UserAuth();
    // console.log(user)
    return (
        <div>
            {  !user ? (<Link href='/all-product'>
                <button className='mt-7 bg-[#f60014] px-7 py-4 text-white flex text-sm'>GET STARTED FOR FREE <Image className='ms-4 hover:translate-x-[10px] transition-transform duration-1000'
                    src="/icons8-right-arrow-90.png"
                    alt=""
                    width={20}
                    height={20}
                /> </button>
            </Link>) : (<Link href='/all-product'>
                <button className='mt-7 bg-[#f60014] px-7 py-4 text-white flex text-sm'> ACCESS YOUR APPS  <Image className='ms-4 hover:translate-x-[10px] transition-transform duration-1000'
                    src="/icons8-right-arrow-90.png"
                    alt=""
                    width={20}
                    height={20}
                /> </button>
            </Link>)

            }


        </div>
    );
};

export default Buttonp1;