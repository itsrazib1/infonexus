import React, { useState, useEffect } from "react";
import { UserAuth } from "../Context/AuthContext";
import Image from "next/image";
import Image1 from "../../../public/google.webp";
import Image2 from "../../../public/gitgub.png";

const Googlelogin = () => {
    const { user, googleSignIn, gitHubSignIn } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    const handleGitSignIn = async () => {
        try {
            await gitHubSignIn();
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

    return (
        <div className=" w-full border-b-2 flex items-center -mt-2 justify-between p-2">


            {loading ? null : !user ? (
                <ul className="flex gap-5">
                    <li onClick={handleSignIn} ><Image
                        src={Image1}
                        alt="Image"
                        className="border rounded-md border-blue-500 h-12 w-20 px-4 py-2 bg-white"
                    /></li>
                    <li onClick={handleGitSignIn}>
                        <Image
                            src={Image2}
                            alt="Image"
                            className="border rounded-md border-blue-500 h-12 w-20 px-4 py-2 bg-white"
                        />
                    </li>


                </ul>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
};

export default Googlelogin;