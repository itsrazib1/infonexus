import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "@/app/Context/AuthContext";
import Image from "next/image";

const NavbarTwo = () => {
    const { user, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

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
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);
    console.log(user)
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
                <div className="flex gap-2">
                    <p>
                        <Image src={user.photoURL} width={40} height={40} className='rounded-full' alt="" />
                    </p>

                    <p className=" text-yellow-50 mt-1 btn btn-sm cursor-pointer text-xs px-2 py-1 bg-red-600" onClick={handleSignOut}>
                        Sign out
                    </p>
                </div>
            )}
        </div>
    );
};

export default NavbarTwo;