import React from 'react';
import './index.css';
import Image from 'next/image';
import Chrome from '../../../public/chrome-logo.svg'
import Mozilla from '../../../public/Mozilla_Firefox_logo.svg.png'
import Brave from '../../../public/Brave_lion_icon.svg.png'
import Opera from '../../../public/png-clipart-opera-mini-removebg-preview.png'
import Safari from '../../../public/Safari_browser_logo.svg.png'
import Edge from '../../../public/microsoftedgenewlogo-removebg-preview.png'
import Slimjet from '../../../public/slimjet.webp'
import Maxthon from '../../../public/1200px-Maxthonlogo.svg.png'
import NetFront from '../../../public/netfronthighmemmodbeta4.webp'

const Browsers = () => {
    return (
        <div className='bg3 min-h-screen'>
            <div className='text-center md:pt-16 font-serif font-bold text-black text-3xl'>
                <h1>!!! Find information from your favorite browser !!!</h1>
            </div>
            <div className='bg-black opacity-60 h-[72vh] md:h-80 w-11/12 mx-auto rounded-2xl '>
                <div className='grid grid-cols-2 md:grid-cols-5 justify-items-center items-center gap-y-10 mt-10 md:mt-24 pt-6 md:pt-12 w-10/12 mx-auto'>
                    <div>
                        <a target='blank' href="https://www.google.com/">
                            <Image
                                src={Chrome}
                                alt="Image"
                                className='w-16 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.mozilla.org/en-US/firefox/115.0.3/whatsnew/?oldversion=113.0.2">
                            <Image
                                src={Mozilla}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://search.brave.com/">
                            <Image
                                src={Brave}
                                alt="Image"
                                className='w-16 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.opera.com/browsers/opera">
                            <Image
                                src={Opera}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.apple.com/safari/">
                            <Image
                                src={Safari}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-y-10 mt-10 md:mt-20 w-10/12 mx-auto'>
                    <div>
                        <a target='blank' href="https://www.microsoft.com/en-us/edge?form=MA13IT&pl=launch">
                            <Image
                                src={Edge}
                                alt="Image"
                                className='w-32 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.slimjet.com/">
                            <Image
                                src={Slimjet}
                                alt="Image"
                                className='w-20 h-auto'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.maxthon.com/en/">
                            <Image
                                src={Maxthon}
                                alt="Image"
                                className='w-20 h-20 rounded-full'
                            />
                        </a>
                    </div>
                    <div>
                        <a target='blank' href="https://www.access-company.com/en/products/netfront-browser/">
                            <Image
                                src={NetFront}
                                alt="Image"
                                className='w-20 h-20 rounded-full'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Browsers;




