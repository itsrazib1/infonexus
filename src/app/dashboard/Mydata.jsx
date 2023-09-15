import Image from "next/image";
import { UserAuth } from "../Context/AuthContext";



const Mydata = () => {
    const { user } = UserAuth();
    console.log("userw",user)
    return (
        <div className="pt-10" id="userdata">
            <div className=" hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/Dz50Zbz/abstract-fluid-background-with-colorful-gradient-747896-4664.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                       
                        <h1 className="mb-5 text-5xl font-bold">User Information</h1>
                        <h1 className=" font-bold">Name : {user?.displayName}</h1>
                        <p className="my-5">Email : {user?.email}</p>
                        <Image className="mx-auto" src={user?.photoURL} width={80} height={80} alt="photoURL"></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mydata;