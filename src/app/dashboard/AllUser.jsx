import React from 'react';
import Image from 'next/image';
import getusers from '../utils/getusers';

const AllUser = async () => {
    const user = await getusers();
    return (
        <div id='dashAllUser'>
            <div className='mt-28'>
                <hr className='sm:w-[70%] md:w-80 mx-auto mt-5 mb-5' />
                <p className='text-[#c75633] font-serif font-bold text-3xl'>All User: {user?.length} !!!</p>
                <hr className='sm:w-[70%] md:w-80 mx-auto mt-5' />
            </div>
            <div className='w-5/6 mx-auto mt-20'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-[#222324] text-base'>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
    user?.map((p, index) => (
        <tr key={p._id}>
            <th>{index + 1}</th>
            <td>{p?.name}</td>
            <td>{p?.email}</td>
            <td><Image className='rounded-full' src={p.photoUrl} height={40} width={40} alt={`${p.name}'s Profile Photo`} /></td>
            
        </tr>
    ))
}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;