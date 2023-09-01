import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "@/app/Context/AuthContext";
import Image from "next/image";

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
    const addTodatabase  = async () => {
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
    // console.log(user)
    return (
        <div className=" ">


            {loading ? null : !user ? (
                <ul className="flex gap-4">
                    <li><Link href="/login" className="hidden md:block pt-1">
                        Sign in
                    </Link></li>
                    <li><Link href='/singin'
                        className={`fixed md:text-[14px] bottom-0 h-[50px] md:h-[35px] flex items-center justify-center
                       md:border md:text-[#f72637]  font-semibold z-50 left-0 w-full md:w-[90px] md:relative p-2 md:border-[#f72637]  bg-[#f72637] md:bg-transparent hover:text-white hover:bg-[#f72637] duration-500 ${isMobile ? "mobile" : "desktop"
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
                                className="rounded-full cursor-pointer"
                                alt=""
                            />

                            {isHovered && (
                                <>
                                    <div class="absolute px-4 pt-1 top-0 -left-20 bg-white border-black border -ms-10 max-w-xs  shadow-lg">
                                        <div className="flex gap-4 p-2">
                                            <div><Image width={40} height={40}
                                                src={user.photoURL} alt="user"></Image></div>
                                            <div className="text-xs font-semibold">{user.displayName}</div>
                                        </div>

                                        <div class="    flex flex-row ">
                                            <h2 ><p
                                                className=" md:btn-sm text-blue-500 cursor-pointer text-xs px-2 py-1 ">
                                                <a onClick={addTodatabase} href="/dashboard">Dashboard</a>
                                            </p></h2>
                                            <h2>
                                                <p
                                                    className=" bottom-0  font-bold text-red-500   cursor-pointer text-xs px-2 py-1 "
                                                    onClick={handleSignOut}
                                                >
                                                    <span className="text-xs ">Logout</span>
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