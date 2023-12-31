import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "@/app/Context/AuthContext";
import Image from "next/image";
import "./Nevber.css"

const NavbarTwo = () => {
    const { user, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const [isHovered, setIsHovered] = useState(false);

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
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            // console.log(error);
        }
    };
    const addTodatabase = async () => {
        try {
            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            };
            // console.log(userData)

            await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
        } catch (error) {
            // console.log(error);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div className=" ">


            {loading ? null : !user ? (
                <ul className="flex gap-4">
                    <li><Link href="/login" className="hidden border px-3 hover:text-blue-400 py-1 md:block pt-1">
                        Sign in
                    </Link></li>
                    <li><Link href='/singin'
                        className={`fixed md:text-[14px] bottom-0 h-[50px] md:h-[35px] flex items-center justify-center
                       md:border md:text-[#ee5b4b]  font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2  md:border-[#ee5b4b]  bg-[#ee5b4b] md:bg-transparent hover:text-white hover:bg-[#e34938] duration-500 ${isMobile ? "mobile" : "desktop"
                            }`}>
                        {isMobile ? "Sign up for free" : "Sign up"}
                    </Link></li>

                </ul>
            ) : (
                <div className="flex items-center gap-2">

                    <p>
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Image
                                src={user.photoURL}
                                width={40}
                                height={40}
                                className="rounded-full  cursor-pointer"
                                alt=""
                            />

                            {isHovered && (
                                   <>
                                   <div class="absolute px-4 pt-1 top-0 -left-28 bg-white rounded-lg border -ms-10 max-w-xs  shadow-lg">
                                       <div className="flex items-center gap-4 p-2">
                                           <div><Image className="rounded-full" width={40} height={45}
                                               src={user.photoURL} alt="user"></Image></div>
                                           <div className="text-xs font-semibold">{user.displayName}</div>
                                       </div>
                                       <div class=" flex flex-row gap-1 py-2">
                                           <h2><p className="md:btn-sm btn-accent  btn-outline cursor-pointer rounded-[5px] px-2 py-1 hover:bg-blue-400 hover:text-white transition-btn border-blue-400 border">
                                               <a  onClick={addTodatabase} href="/dashboard">Dashboard</a>
                                           </p>
                                           </h2>
                                           <h2>
                                               <p
                                                   className="md:btn-sm text-red-500 cursor-pointer rounded-[5px] hover:bg-red-400 hover:text-white transition-btn px-2 py-1 border-red-400 border"
                                                   onClick={handleSignOut}
                                               >
                                                   <span>Logout</span>
                                               </p>
                                           </h2>
                                       </div>
                                   </div>

                               </>

                            )}
                        </div>
                    </p>
                </div>
            )}
        </div>
    );
};

export default NavbarTwo;