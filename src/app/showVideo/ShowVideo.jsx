"use client"
import React from 'react';
import Typical from 'react-typical';

const ShowVideo = () => {
    return (
        <div className='mt-10'>
            <h1 className='font-serif text-xl md:text-2xl text-center text-gradient font-bold flex justify-center'>
                <span className='text-gradient me-3'>Info-Nexus</span>
                <Typical
                    steps={['Information !!!', 800, 'Videos !!!', 900]}
                    loop={Infinity}
                    wrapper="span"
                />
                {/* <span className='text-red-500'>Videos</span> !!! */}
                {/* <span className='text-red-500'>Videos</span> !!! */}
                </h1>
            <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-y-8 justify-items-center'>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/1QT5jvM7z3M?si=MuS79oJ8DDzTYa9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/i-7poTsQbXc?si=80_yslF9_VeptYSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/r9StNfq-uyE?si=sKSvKwo4qWd3w99s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/DNXdYDX9TtY?si=E0nUs7KhAIfoxsdg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/-esssbkpKUo?si=ROFqxM2-HIWSr1fY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe className='md:w-96 md:h-52' src="https://www.youtube.com/embed/eZgCTUOlPLE?si=qdYYN3qglKKuMfS7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default ShowVideo;