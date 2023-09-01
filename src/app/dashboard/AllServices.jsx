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
        <>
            <div id='Sales'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Sales Services: {Sales?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    Sales?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='Marketings'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Marketings Services: {Marketings?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                        <td>{p?.description}</td>
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
            <div id='service'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>All Services: {service?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                                alt={`${p?.name} Icon`}
                                            />
                                        </td>
                                        <td>{p?.name}</td>
                                        <td>{p?.description}</td>
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
            <div id='Finances'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Finances Services: {Finances?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                        <td>{p?.description}</td>
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
            <div id='EmailCollaboration'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Email Collaboration Services: {EmailCollaboration?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    EmailCollaboration?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='Hr'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>HR  Services: {Hr?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    Hr?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='Legal'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Legal  Services: {Legal?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    Legal?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='securityITManagement'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base' >SecurityITManagement  Services: {securityITManagement?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    securityITManagement?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='bianalytics'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Bianalytics  Services: {bianalytics?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    bianalytics?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='projectManagement'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>ProjectManagement  Services: {projectManagement?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    projectManagement?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
            <div id='developerplatform'>
                <div className='mt-10'>
                    <hr className='w-[70%] mx-auto mt-5 mb-5' />
                    <p className='text-[#c75633] font-serif font-bold md:text-3xl sm:text-base'>Developerplatform  Services: {developerplatform?.length} !!!</p>
                    <hr className='w-[70%] mx-auto mt-5' />
                </div>
                <div className='w-5/6 mx-auto mt-10'>
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
                                    developerplatform?.map((p, index) => <tr key={p._id}>
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
                                        <td>{p?.description}</td>
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
        </>
    );
};

export default AllServices;