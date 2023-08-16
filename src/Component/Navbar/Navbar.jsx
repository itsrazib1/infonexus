"use client";

import React, { useState, useEffect } from "react";
import {
   FaWindowClose,
   FaBars,
   FaBullhorn,
   FaEllipsisH,
   FaGlobe,
   FaSearch,
   FaTimes,
} from "react-icons/fa";
import { GoChevronDown, GoSearch } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../../public/logo.png";
import NavbarTwo from "./Navbar2";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isSearch, setIsSearch] = useState(false);
   const [isAccordionOpen, setIsAccordionOpen] = useState(false);
   const [isMonsurAccordionOpen, setIsMonsurAccordionOpen] = useState(false);

   const toggleAccordion = () => {
      setIsAccordionOpen(!isAccordionOpen);
   };

   const toggleMonsurAccordion = () => {
      setIsMonsurAccordionOpen(!isMonsurAccordionOpen);
   };

   const handleSearch = () => {
      setIsSearch(!isSearch);
   };

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   

   

   return (
      <nav className="bg-base-200 md:sticky z-50 top-0 left-0 right-0 text-black">
         <div className="max-w-7xl mx-auto px-4 py-4 md:py-2">
            <div className={`flex items-center justify-between`}>
               <div className="flex items-center">
                  <Link href="/">
                     <Image  src={img1} alt="Image" className="h-12 w-12" />
                  </Link>
                  <div className="hidden md:block">
                     <ul className="md:flex md:ml-9 md:space-x-9 md:items-center">
                        <li className="flex items-center space-x-1">
                           <Link href="#">Products</Link>
                           <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" />
                        </li>
                        <li>Customers</li>
                        <li className="flex items-center space-x-1">
                           <Link href="#">Company</Link>
                           <GoChevronDown className="mt-[4px] w-[20px] h-[22px]" />
                        </li>
                        <FaEllipsisH className="w-[50px] h-[20px]" />
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
                        className={`bg-blue-200 w-[100%] py-3 shadow-md absolute ${
                           isSearch
                              ? "-bottom-14 delay-300 duration-700"
                              : "-top-28 delay-300 duration-700"
                        } transition   right-0 `}>
                        <form action="#" className="w-[80%]  mx-auto">
                           <input
                              type="text"
                              placeholder="Search..."
                              className="w-[80%] rounded-none mx-auto px-2 py-1"
                           />
                           <button className="text-gray-500 px-4 py-1 border-2 border-blue-500 ml-2 hover:text-gray-700">
                              search
                           </button>
                        </form>
                     </div>

                     <div className="flex items-center space-x-9">
                        <FaBullhorn className="w-[20px] h-[20px]" />
                        <span className="flex items-center space-x-[6px]">
                           <FaGlobe className="w-[20px] h-[20px]" />
                           <span>ENG</span>
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
                     <div className="p-3">
                        <div
                           className="flex items-center cursor-pointer"
                           onClick={toggleAccordion}>
                           <div className="flex-grow font-semibold">
                              Product
                           </div>
                           {/* Accordion arrow */}
                           <svg
                              className={`w-6 h-6 transition-transform ${
                                 isAccordionOpen ? "rotate-180" : ""
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
                           <div className="ml-6 mt-2 duration-300">
                              <a
                                 href="#"
                                 className="block py-2   hover:text-blue-400 duration-500 ">
                                 App
                              </a>
                              <a
                                 href="#"
                                 className="block py-2  hover:text-blue-400 duration-500">
                                 Suites
                              </a>
                              <a
                                 href="#"
                                 className="block py-2  hover:text-blue-400 duration-500">
                                 Platform
                              </a>
                           </div>
                        )}
                     </div>
                     <a href="#" className="font-semibold p-3">
                        Customers
                     </a>

                     {/* Second accordion */}
                     <div className="p-3">
                        <div
                           className="flex items-center cursor-pointer"
                           onClick={toggleMonsurAccordion}>
                           <div className="flex-grow font-semibold">
                              Company
                           </div>
                           {/* Accordion arrow */}
                           <svg
                              className={`w-6 h-6 transition-transform ${
                                 isMonsurAccordionOpen ? "rotate-180" : ""
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
                        {isMonsurAccordionOpen && (
                           <div className="ml-6 mt-2 cursor-pointer">
                              <a
                                 href="#"
                                 className="block py-2 hover:text-blue-400 duration-500">
                                 About us
                              </a>
                              <a
                                 href="#"
                                 className="block py-2 hover:text-blue-400 duration-500">
                                 Our story
                              </a>
                              <a
                                 href="#"
                                 className="block py-2 hover:text-blue-400 duration-500">
                                 Rural revival
                              </a>
                              <a
                                 href="#"
                                 className="block py-2 hover:text-blue-400 duration-500">
                                 Press
                              </a>
                           </div>
                        )}
                     </div>
                  </div>
                  <div className="p-3 font-semibold">
                     <Link href="/singin" className="text-orange-600">
                        Sign in
                     </Link>
                     <p className="py-2">All nexus products</p>
                  </div>
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;