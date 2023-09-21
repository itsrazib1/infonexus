"use client"
import React from 'react';

const ShowVideo = () => {
    return (
        <div className='mt-12'>
            <h1 className='font-serif text-xl md:text-2xl text-center  font-bold flex justify-center'>
                <span className='text-black me-3'>Info-Nexus Service Information Videos!!!</span>
                {/* <Typical
                    steps={['Information !!!', 800, 'Videos !!!', 900]}
                    loop={Infinity}
                    wrapper="span"
                /> */}
                {/* <span className='text-red-500'>Videos</span> !!! */}
                </h1>
            <div className='my-12 grid grid-cols-1 md:grid-cols-3 gap-y-14 md:gap-y-8 justify-items-center'>
                <div>
                <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/Dfjhe8_zmUI?si=jbMAipp5qiDlXyIf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/ekYKMJ-AqK8?si=U28qLFJOpnh_YkKl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/Nfavc1dtbJQ?si=Q74YG3nbVWQ13Fjo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/Q06CY0QtBtg?si=bkoeVkd_yjJQ7RId" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div>
                    
                    <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/o4OlBFV1jdU?si=PP11-qGOFPnrH1Gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                <iframe className='md:w-96 md:h-52 ' src="https://www.youtube.com/embed/u9aSKwpzFD8?si=q_rmmpL0jCZdPevW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default ShowVideo;