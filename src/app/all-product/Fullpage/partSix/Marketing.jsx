
import { MarketingData } from "@/app/data/Marketing";
import Image from "next/image";



const UserCard = ({  name, discription, btn,image }) => (
    <div className="md:w-1/3 sm:w-full p-4 ">
        <div className="bg-white rounded-lg shadow-lg h-48 p-4">
            <Image width={100} height={100} src={image} alt="Image" className='h-10 border  w-10  ' />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{`${discription}`}</p>
            <p className="text-blue-500 font-semibold ">{btn}</p>
        </div>
    </div>
);
const Marketing = async () => {
    
    return (
        <div className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Marketing</div>
                <div>Engage with prospects using multi-channel marketing tools that help you personalize experiences at scale.</div>
            </div>
            <div className="flex flex-wrap ">
                {MarketingData.map(({ id, name, discription, btn,image }) => (
                    <UserCard
                        key={id}
                        id={id}
                        name={name}
                        discription={discription}
                        btn={btn}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Marketing;