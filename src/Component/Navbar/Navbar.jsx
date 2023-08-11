"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from '../../../public/logo.png'

import {
   FaAd,
   FaBars,
   FaBullhorn,
   FaEllipsisH,
   FaGlobe,
   FaTimes,
} from "react-icons/fa";
import { GoChevronDown, GoSearch } from "react-icons/go";
// import logo from "../../../public/Google_Nexus-Logo.wine.svg";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isSearch, setIsSearch] = useState(false);

   const handleSearch = () => {
      setIsSearch(!isSearch);
   };

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const checkScreenWidth = () => {
         setIsMobile(window.innerWidth < 768);
      };

      checkScreenWidth();
      window.addEventListener("resize", checkScreenWidth);

      return () => {
         window.removeEventListener("resize", checkScreenWidth);
      };
   }, []);

   return (
      <nav className="bg-base-200 md:sticky z-50 top-0 left-0 right-0  text-black">
         <div className="max-w-7xl mx-auto px-4 py-4 md:py-2">
            <div className={`flex  items-center justify-between `}>
               <div className="flex items-center">
                  <h2><Image src={img1}  alt="Image" className='h-12 w-12  '/></h2>
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
                  <div className=" md:flex  items-center space-x-9">
                     <div
                        className="hidden md:block"
                        onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                           <FaTimes
                              onClick={handleSearch}
                              className="text-2xl"></FaTimes>
                        ) : (
                           <GoSearch
                              onClick={handleSearch}
                              className="w-[20px] h-[20px]"></GoSearch>
                        )}
                     </div>

                     <div
                        className={`bg-blue-200 w-[100%] py-3 absolute ${
                           isSearch
                              ? "-bottom-14 delay-300  duration-700"
                              : "-top-28 delay-300 duration-700"
                        } transition   right-0 `}>
                        <form action="#" className="w-[80%] mx-auto">
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
                     </div>
                     <Link href="#" className="hidden md:block">
                        Sign in
                     </Link>
                     <button
                        className={`fixed md:text-[14px] bottom-0 h-[50px] md:h-[35px] flex items-center justify-center
                       md:border md:text-[#f72637]  font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2 md:border-[#f72637]  bg-[#f72637] md:bg-transparent hover:text-white hover:bg-[#f72637] duration-500 ${
                          isMobile ? "mobile" : "desktop"
                       }`}>
                        {isMobile ? "Sign up for free" : "Sign up"}
                     </button>
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
                        {" "}
                        <FaBars className="text-white text-2xl"></FaBars>
                     </button>
                  )}
               </div>
            </div>
         </div>
         {isOpen && (
            <div className="md:hidden delay-300 duration-500">
               <div className="w-[50%] h-[40vh] bg-blue-200 absolute bottom-0 left-0 "></div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;