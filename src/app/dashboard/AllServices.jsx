import React, { useEffect, useState } from 'react';
import { getServices } from '../utils/getServices';
import Image from 'next/image';
import { getMarketings } from '../utils/getMarketings';
import { getFinances } from '../utils/getFinances';
import { getEmailCollaboration } from '../utils/getEmailCollaboration';
import { gethr } from '../utils/gethr';
import { getLegal } from '../utils/getLegal';
import { getsecurityITManagement } from '../utils/getsecurityITManagement';
import { getbianalytics } from '../utils/getbianalytics';
import { getprojectManagement } from '../utils/getprojectManagement';
import { getdeveloperplatform } from '../utils/getdeveloperplatform';
import { getSales } from '../utils/getsales';

const AllServices = () => {
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
    
    return (
        <div className='mt-28'>
            <div className='' id='Sales'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Sales Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    Sales?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
            <hr className='w-[90%] mx-auto mt-5' />
            <div className='mt-28' id='Marketings'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Marketings Services</p>
                    
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    Marketings?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-full cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5' />
            <div className='mt-28' id='service'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>All Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
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
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5 py-1' />
            <div className='mt-28' id='Finances'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Finances Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    Finances?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-full cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5' />
            <div className=' mt-28' id='EmailCollaboration'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Email Collaboration Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    EmailCollaboration?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className=' mt-28' id='Hr'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>HR  Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    Hr?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className='mt-28' id='Legal'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Legal  Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    Legal?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className=' mt-28' id='securityITManagement'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]' >Security IT Management Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    securityITManagement?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className='mt-28' id='bianalytics'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Bianalytics  Services</p>

                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    bianalytics?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className='mt-28' id='projectManagement'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>ProjectManagement  Services</p>

                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    projectManagement?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
                    <hr className='w-[90%] mx-auto mt-5 mb-5' />
            <div className='mt-28' id='developerplatform'>
                <div className='mt-10'>
                    <p className='text-white font-serif font-bold md:text-3xl sm:text-base ngh m-auto p-4 bg-violet-600 rounded-2xl md:w-[500px]'>Developer Platform  Services</p>
                </div>
                <div className='md:w-4/5 text-white colorGRD rounded-xl mx-auto mt-16 mb-10'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-[#d8d65e] text-base'>
                                    <th>Index</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th  className="md:block hidden">Description</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    developerplatform?.map((p, index) => <tr key={p._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <Image
                                                src={p?.image}
                                                width={45}
                                                height={45}
                                                className="rounded-xl bg-white h-[45px] cursor-pointer me-2"
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td className="md:block hidden">{p?.description}</td>
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
        </div>
    );
};

export default AllServices;