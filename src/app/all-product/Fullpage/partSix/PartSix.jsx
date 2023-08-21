
import { UserData } from "@/app/data/Sales";
import Image from "next/image";

const UserCard = ({  username, firstName, email,image }) => (
    <div className="md:w-1/3 sm:w-full p-4 ">
        <div className="bg-white rounded-lg shadow-lg h-48 p-4">
            <Image width={100} height={100} src={image} alt="Image" className='h-10 border  w-10  ' />
            <h2 className="text-xl font-semibold">{username}</h2>
            <p className="text-gray-600">{`${firstName}`}</p>
            <p className="text-blue-500 font-semibold ">{email}</p>
        </div>
    </div>
);

const PartSix = () => {
    return (
        <div className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Sales</div>
                <div>Help your sales team be more productive with tools they love.</div>
            </div>
            <div className="flex flex-wrap ">
                {UserData.map(({ id, username, firstName, email,image }) => (
                    <UserCard
                        key={id}
                        id={id}
                        username={username}
                        firstName={firstName}
                        email={email}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
};

export default PartSix;