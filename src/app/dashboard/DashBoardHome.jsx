'use client'
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../Context/AuthContext';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { getusers } from '../utils/getusers';
import { getSales } from '../utils/getsales';
import { getMarketings } from '../utils/getMarketings';
import { getServices } from '../utils/getServices';
import { getFinances } from '../utils/getFinances';
import { getEmailCollaboration } from '../utils/getEmailCollaboration';
import { gethr } from '../utils/gethr';
import { getLegal } from '../utils/getLegal';
import { getsecurityITManagement } from '../utils/getsecurityITManagement';
import { getbianalytics } from '../utils/getbianalytics';
import { getprojectManagement } from '../utils/getprojectManagement';
import { getdeveloperplatform } from '../utils/getdeveloperplatform';
const DashBoardHome = () => {
    const { user } = UserAuth();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getusers();
                // console.log("User data in component:", userData); 
                setUsers(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    // const data = [
    //     {
    //         "name": "A",
    //         "uv": 4000,
    //         "pv": 2400,
    //         "amt": 2400
    //     },
    //     {
    //         "name": "Admin",
    //         "uv": 3000,
    //         "pv": 1398,
    //         "amt": 2210
    //     },
    //     {
    //         "name": "All User",
    //         "uv": 2000,
    //         "pv": 9800,
    //         "amt": 2290
    //     },
    //     {
    //         "name": "All services",
    //         "uv": 2780,
    //         "pv": 3908,
    //         "amt": 2000
    //     },
    //     {
    //         "name": "User Management",
    //         "uv": 2780,
    //         "pv": 5908,
    //         "amt": 2000
    //     }
    // ]

    const [Sales, setSales] = useState([]);
    const [Marketings, setMarketings] = useState([]);
    const [service, setServices] = useState([]);
    const [Finances, setFinances] = useState([]);
    const [EmailCollaboration, setEmailCollaboration] = useState([]);
    const [Hr, setHr] = useState([]);
    const [Legal, setLegal] = useState([]);
    const [securityITManagement, setSecurityITManagement] = useState([]);
    const [bianalytics, setBianalytics] = useState([]);
    const [projectManagement, setProjectManagement] = useState([]);
    const [developerplatform, setDeveloperPlatform] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const salesData = await getSales();
                setSales(salesData);

                const marketingsData = await getMarketings();
                setMarketings(marketingsData);

                const servicesData = await getServices();
                setServices(servicesData);

                const FinancesData = await getFinances();
                setFinances(FinancesData);

                const EmailCollaborationData = await getEmailCollaboration();
                setEmailCollaboration(EmailCollaborationData);

                const hrData = await gethr();
                setHr(hrData);

                const legalData = await getLegal();
                setLegal(legalData);

                const securityITManagementData = await getsecurityITManagement();
                setSecurityITManagement(securityITManagementData);

                const bianalyticsData = await getbianalytics();
                setBianalytics(bianalyticsData);

                const projectManagementData = await getprojectManagement();
                setProjectManagement(projectManagementData);

                const developerplatformData = await getdeveloperplatform();
                setDeveloperPlatform(developerplatformData);

                // Fetch data for other services and update their respective state variables
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const services = Sales.length;
    const services2 = Marketings.length;
    const services3 = service.length;
    const services4 = Finances.length;
    const services5 = EmailCollaboration.length;
    const services6 = Hr.length;
    const services7 = Legal.length;
    const services8 = securityITManagement.length;
    const services9 = bianalytics.length;
    const services10 = projectManagement.length;
    const services11 = developerplatform.length;
    const total = services + services2 + services3 + services4 + services5 + services6 + services7 + services8 + services9 + services10 + services11;



    return (
        <div className='mt-5 md:block box ' id='dashHome'>
            <div className='shadow3'>
                <hr className='w-[90%] mx-auto mt-5 mb-5' />
                <p className='text-[#e4da4b] font-serif font-bold text-4xl'><span className='text-[#df3737]'>{user?.displayName}</span> Dashboard !!!</p>
                <hr className='w-[90%] mx-auto mt-5' />
            </div>
            <div className='mt-20 pb-10 w-10/12'>
                <div className="stats flex flex-col md:flex-row shadow box3 text-[#e4da4b]">

                    <div className="stat ">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="text2">All Services</div>
                        <div className="stat-value">{total}</div>
                        <div className="text2">Jan 1st 2023 - Present</div>
                    </div>

                    <div className="stat ">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="text2">All Users</div>
                        <div className="stat-value">{users?.length}</div>
                        <div className="text2">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="text2">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="text2">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
            {/* <div className='ms-36 mt-28 box3 mx-auto'>
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
            </div> */}
        </div>
    );
};

export default DashBoardHome;