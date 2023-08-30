
import getServices from "@/app/utils/getServices";
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
const Service = async () => {
    
    const Service = await getServices();
    // console.log(Service);
    return (
        <div id="Service" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Service</div>
                <div>Empower your customer and field service teams to deliver happiness and win trust.</div>
            </div>
            <div className="flex flex-wrap ">
                {Service.map(({ id, name, discription, btn,image }) => (
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

export default Service;