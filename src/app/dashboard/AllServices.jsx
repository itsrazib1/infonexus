import React from 'react';
import getServices from '../utils/getServices';
import Image from 'next/image';

const AllServices = async () => {
    const service = await getServices();
    console.log(service);
    return (
        <div id='dashAllService'>
            <div className='mt-28'>
                <hr className='w-80 mx-auto mt-5 mb-5' />
                <p className='text-[#c75633] font-serif font-bold text-3xl'>All Services: {service?.length} !!!</p>
                <hr className='w-80 mx-auto mt-5' />
            </div>
            <div className='w-5/6 mx-auto mt-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-[#222324] text-base'>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                service?.map((p, index) => <tr key={p._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <Image
                                            src={p?.image}
                                            width={45}
                                            height={45}
                                            className="rounded-full cursor-pointer me-2"
                                            alt=""
                                        />
                                    </td>
                                    <td>{p?.name}</td>
                                    <td>{p?.discription}</td>
                                    <td>
                                        <button className="btn btn-circle btn-outline btn-error">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllServices;