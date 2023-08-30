"use client";
import  { useState } from "react";
import Googlelogin from "./googlesingin";
import { UserAuth } from "../Context/AuthContext";

const SinginForm = () => {
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const {  googleSignIn  } = UserAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSignIn = async () => {
        try {
            await googleSignIn();
            const userData = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            };
            console.log(userData)

            await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
        } catch (error) {
            console.log(error);
        }
    };
    const handleAgreeChange = () => {
        setAgree(!agree);
    };
    
    

    return (
        <form className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h1 className="text-2xl font-bold  text-gray-900">
                        Start with your free account today.
                    </h1>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        ></label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                className="appearance-none block w-full px-3 border py-4 border-black rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        ></label>
                        <div className="mt-1">
                            {/* <input
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                className="appearance-none block w-full px-3  border py-4 border-black rounded-none shadow-sm placeholder-gray-400  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            /> */}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs">
                            Your data will be stored in the US data center.
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="agree"
                            name="agree"
                            type="checkbox"
                            checked={agree}
                            onChange={handleAgreeChange}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label
                            htmlFor="agree"
                            className="ml-2 block text-sm text-gray-900"
                        >
                            I agree to the{" "}
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Terms of Service and Privacy Policy
                            </a>
                        </label>
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={handleSignIn}
                            className={`group relative rounded-none w-full flex justify-center  px-4 border border-transparent text-sm font-medium py-4 ${agree
                                    ? "bg-red-500  hover:bg-red-600"
                                    : "bg-red-400 pointer-events-none"
                                } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            SING UP FOR FREE
                        </button>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="pt-3">or sign in using</div>{" "}
                        <div className="flex gap-5">
                            {" "}
                            
                            <Googlelogin></Googlelogin>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SinginForm;
