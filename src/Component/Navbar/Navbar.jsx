"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
   FaWindowClose,
   FaBars,
   FaSearch,
   FaTimes,
} from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/logo.png";
import NavbarTwo from "./Navbar2";
import useTheme from "@/hooks/useTheme";
import LiveTime from "../Livetime/Livietime";
import VideoImg from '../../../public/video.png'
import chatImg from '../../../public/chaticon.png'
import { getChats } from "@/app/utils/getChats";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isSearch, setIsSearch] = useState(false);
   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
   const [colleges, setColleges] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [filteredColleges, setFilteredColleges] = useState([]);
   const { theme, toggleTheme } = useTheme();
   const [chats, setchats] = useState([]);
   const toggleAccordion = () => {
      setIsAccordionOpen(!isAccordionOpen);
   };


   const handleSearch = () => {
      setIsSearch(!isSearch);
   };

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };
   const fetchCollegesData = async () => {
      fetch("/api/alldata",)
         .then((response) => response.json())
         .then((data) => {
            setColleges(data);
         })
         .catch((error) => console.error("Error fetching colleges:", error));
   };
   const filterColleges = useCallback(() => {
      if (searchTerm.trim() === "") {
         setFilteredColleges(colleges);
      } else {
         const filtered = colleges.filter((college) =>
            college.name.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setFilteredColleges(filtered);
      }
   }, [colleges, searchTerm]);
   useEffect(() => {
      // Fetch the colleges data from the API when the component mounts
      fetchCollegesData();
   }, []);
   useEffect(() => {
      // Whenever the search term changes, filter the colleges
      filterColleges();
   }, [filterColleges]);


   useEffect(() => {
      const fetchData = async () => {
        try {
          const userData = await getChats();
          // console.log("User data in component:", userData); 
          setchats(userData);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchData();
    }, []);



   return (
      <div>
         <nav className="bg-[#37a8ff]  rounded-full mx-4 mt-2  md:sticky z-50 top-0 left-0 right-0 text-base">
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-2">
               <div className={`flex items-center justify-between`}>
                  <div className="flex items-center">
                     <Link href="/">
                        <Image src={img1} alt="Image" className="h-[60px] w-[60px]" />
                     </Link>
                     <div className="hidden md:block">
                        <ul className="md:flex md:ml-9 md:space-x-9 md:items-center">

                           <li><div
                              className=" flex items-center cursor-pointer"
                              onClick={toggleAccordion}>
                              <div className="flex-grow font-semibold">
                                 Products
                              </div>
                              {/* Accordion arrow */}
                              <svg
                                 className={`w-6 h-6 transition-transform ${isAccordionOpen ? "rotate-180" : ""
                                    }`}
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"></path>
                              </svg>
                           </div>
                              {isAccordionOpen && (
                                 <div className=" bg-white text-black border-black absolute ml-0 rounded-lg border px-3 mt-2 duration-300">
                                    <Link
                                       href="/all-product#sales"
                                       className="block py-1   hover:text-blue-400 duration-500 ">
                                       Sales
                                    </Link>
                                    <Link
                                       href="/all-product#Marketing"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Marketing
                                    </Link>
                                    <Link
                                       href="/all-product#Service"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Service
                                    </Link>
                                    <Link
                                       href="/all-product#Finance"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Finance
                                    </Link>
                                    <Link
                                       href="/all-product#Email"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Email & Collaboration
                                    </Link>
                                    <Link
                                       href="/all-product#HR"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       HR
                                    </Link>
                                    <Link
                                       href="/all-product#Legal"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Legal
                                    </Link>
                                    <Link
                                       href="/all-product#Security"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Security & IT Management
                                    </Link>
                                    <Link
                                       href="/all-product#BI"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       BI & Analytics
                                    </Link>
                                    <Link
                                       href="/all-product#Project"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Project Management
                                    </Link>
                                    <Link
                                       href="/all-product#Developer"
                                       className="block py-1  hover:text-blue-400 duration-500">
                                       Developer Platforms
                                    </Link>
                                 </div>
                              )}
                           </li>
                           <Link href="/customers"><li>Customers</li></Link>
                           <li className="flex items-center space-x-1">
                              <Link href="/all-product">All Product</Link>
                              {/* <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" /> */}
                           </li>
                           <li className="flex items-center  space-x-1">
                              <Link href="/chats"><label tabIndex={0} className="btn btn-ghost btn-circle">
                                 <div className="indicator">
                                 <Image
                                 src={chatImg}
                                 alt="Image"
                                 className='w-9 h-auto'
                              />
                                    <span className="badge bg-red-600 mt-2 text-white badge-sm indicator-item">{chats?.length}</span>
                                 </div>
                              </label></Link>
                              {/* <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" /> */}
                           </li>
                           <li className="flex items-center  rounded-md px-2 space-x-1">
                              <Link href="/showVideo"><Image
                                 src={VideoImg}
                                 alt="Image"
                                 className='w-9 h-auto'
                              /></Link>
                              {/* <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" /> */}
                           </li>
                           <li className="flex items-center space-x-1">
                              <Link href="/allBrowsers">Browser</Link>
                              {/* <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" /> */}
                           </li>
                           {/* <FaEllipsisH className="w-[50px] h-[20px]" /> */}
                        </ul>
                     </div>
                  </div>

                  <div className="cursor-pointer">
                     <div className="md:flex items-center space-x-9">
                        <div
                           className="hidden md:block"
                           onClick={() => setIsOpen(!isOpen)}>
                           {isOpen ? (
                              <FaWindowClose
                                 onClick={handleSearch}
                                 className="text-2xl"></FaWindowClose>
                           ) : (
                              <GoSearch
                                 onClick={handleSearch}
                                 className="w-[20px] h-[20px]"></GoSearch>
                           )}
                        </div>

                        <div
                           className={`bg-blue-200 w-[100%] py-3 shadow-md absolute ${isSearch
                              ? "-bottom-14 delay-300 duration-700"
                              : "-top-28 delay-300 duration-700"
                              } transition   right-0 `}>
                           <form action="#" className="w-[80%]  mx-auto">
                              <input
                                 type="text"
                                 placeholder="Search..."
                                 value={searchTerm}
                                 onChange={(e) => setSearchTerm(e.target.value)}
                                 className="w-[80%] rounded-none mx-auto px-2 py-1"
                              />
                              <button className="text-gray-500 px-4 py-1 border-2 border-blue-500 ml-2 hover:text-gray-700">
                                 search
                              </button>
                           </form>

                        </div>

                        <div className="flex items-center space-x-9">
                           <label className="swap swap-rotate lg:ml-2">
                              <input
                                 onChange={toggleTheme}
                                 type="checkbox"
                                 checked={theme === "dark"}
                              />
                              <svg
                                 className="swap-on h-7 w-7 fill-current"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                              >
                                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                              </svg>
                              <svg
                                 className="swap-off h-7 w-7 fill-current"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                              >
                                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                              </svg>
                           </label>
                           <span className="flex items-center space-x-[6px]">
                              <LiveTime />

                           </span>

                           <NavbarTwo></NavbarTwo>
                        </div>

                     </div>
                  </div>
                  {/* mobile device responsive */}
                  <div
                     onClick={() => handleToggle(!isOpen)}
                     className="-mr-2 flex fixed bottom-0 z-50 left-0 md:hidden">
                     {isOpen ? (
                        <button className="w-[50px] flex justify-center items-center absolute bottom-0 left-0 h-[50px] text-white bg-black">
                           <FaTimes className="text-2xl"></FaTimes>
                        </button>
                     ) : (
                        <button className="w-[50px] flex justify-center items-center absolute bottom-0 left-0 h-[50px] bg-black text-white">
                           <FaBars className="text-white text-2xl"></FaBars>
                        </button>
                     )}
                  </div>
               </div>
            </div>
            {isOpen && (
               <div className="md:hidden delay-300 duration-500">
                  {/* Mobile search */}
                  <div className="w-[60%] bg-base-200 fixed bottom-0 left-0 z-50 mb-[56px] shadow-2xl shadow-gray-300 max-h-fit m-2 rounded-lg ">
                     <div className="relative flex top-0 border-b-[0.2px] border-gray-400">
                        <div className="relative flex top-0  border-gray-400">
                           <input
                              type="text "
                              className="bg-transparent  focus:outline-none py-2 px-2 w-full"
                              placeholder="search infonexus.com"
                           />
                           <button className="cursor-pointer border-l-[0.5px] border-gray-500  px-2 ">
                              <FaSearch className=" mx-2 w-[20px] h-[20px]"></FaSearch>
                           </button>
                        </div>
                     </div>

                     <div className="border-b border-gray-400 pb-5 pt-2">
                        {/* First accordion */}
                        <div className="font-semibold p-3"><div
                           className="text-slate-600 flex items-center cursor-pointer"
                           onClick={toggleAccordion}>
                           <div className="flex-grow font-semibold">
                              Products
                           </div>
                           {/* Accordion arrow */}
                           <svg
                              className={`w-6 h-6 transition-transform ${isAccordionOpen ? "rotate-180" : ""
                                 }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M19 9l-7 7-7-7"></path>
                           </svg>
                        </div>
                           {isAccordionOpen && (
                              <div className=" bg-white  border-black absolute ml-0 rounded-lg border px-3 mt-2 duration-300">
                                 <Link
                                    href="/all-product#sales"
                                    className="block py-1   hover:text-blue-400 duration-500 ">
                                    Sales
                                 </Link>
                                 <Link
                                    href="/all-product#Marketing"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    Marketing
                                 </Link>
                                 <Link
                                    href="/all-product#Service"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    Service
                                 </Link>
                                 <Link
                                    href="/all-product#Finance"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    Finance
                                 </Link>
                                 <Link
                                    href="/all-product#Email"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    Email & Collaboration
                                 </Link>
                                 <Link
                                    href="/all-product#HR"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    HR
                                 </Link>
                                 <Link
                                    href="/all-product#Legal"
                                    className="block py-1  hover:text-blue-400 duration-500">
                                    Legal
                                 </Link>

                              </div>
                           )}
                        </div>
                        <Link href="/customers" className="font-semibold p-3">
                           Customers
                        </Link>


                        {/* Second accordion */}
                        <div className="p-3">
                           <div
                              className="flex items-center cursor-pointer"
                           >
                              <div className="flex-grow font-semibold">
                                 <Link href="/all-product" className="font-semibold ">
                                    All Product
                                 </Link>
                              </div>

                           </div>

                        </div>
                        <div className="p-3">
                           <div
                              className="flex items-center cursor-pointer"
                           >
                              <div className="flex gap-8 font-semibold">
                                 <Link href="/showVideo"><Image
                                    src={VideoImg}
                                    alt="Image"
                                    className='w-7 h-auto'
                                 /></Link>
                                 <Link href="/chats"><Image
                                    src={chatImg}
                                    alt="Image"
                                    className='w-7 h-auto'
                                 /></Link>
                              </div>

                           </div>

                        </div>

                     </div>
                     <div className="p-3 font-semibold">
                        <Link href="/singin" className="text-orange-600">
                           Sign in
                        </Link>
                     </div>
                  </div>
               </div>
            )}


         </nav>

         <div>
            <ul
               className={`grid mt-10 grid-cols-1 md:grid-cols-4 gap-4 ${searchTerm.length === 0 ? "hidden" : "block"
                  }`}
            >
               {filteredColleges?.map((item) => (
                  <li key={item._id}>
                     <div className="card h-[370px] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                           <Image src={item.image} alt={item.name} height={50} width={100} className="rounded-xl " />
                        </figure>
                        <div className="card-body items-center text-center">
                           <h2 className="card-title">{item.name}</h2>
                           <p className="font-serif font-semibold">{item.description}</p>
                           <div className="card-actions">
                              <Link href='/all-product'>
                                 <button className="btn btn-accent">{item.btn}</button>
                              </Link>

                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>



      </div>

   );
};

export default Navbar;