import React from 'react';
import getUser from '../utils/getUser';

const AllUser = async () => {
    const user = await getUser();
    return (
        <div id='dashAllUser'>
            <div className='mt-28'>
                <hr className='w-80 mx-auto mt-5 mb-5' />
                <p className='text-[#c75633] font-serif font-bold text-3xl'>All User: {user?.length} !!!</p>
                <hr className='w-80 mx-auto mt-5' />
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
                                <th>City</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                user?.map((p, index) => <tr key={p._id}>
                                    <th>{index + 1}</th>
                                    <td>{p?.name}</td>
                                    <td>{p?.email}</td>
                                    <td>{p?.city}</td>
                                    <td>{p?.age}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;