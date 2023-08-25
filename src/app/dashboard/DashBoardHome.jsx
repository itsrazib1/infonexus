'use client'
import React from 'react';
import { UserAuth } from '../Context/AuthContext';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
const DashBoardHome = () => {
    const { user } = UserAuth();

    const data = [
        {
            "name": "A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Admin",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "All User",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "All services",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "User Management",
            "uv": 2780,
            "pv": 5908,
            "amt": 2000
        }
    ]


    return (
        <div className='mt-6' id='dashHome'>
            <div>
                <hr className='w-80 mx-auto mt-5 mb-5' />
                <p className='text-[#e4da4b] font-serif font-bold text-4xl'><span className='text-[#df3737]'>{user?.displayName}</span> Dashboard !!!</p>
                <hr className='w-80 mx-auto mt-5' />
            </div>
            <div className='ms-36 mt-28'>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>
        </div>
    );
};

export default DashBoardHome;