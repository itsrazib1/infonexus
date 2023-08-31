
import gethr from "@/app/utils/gethr";
import Image from "next/image";



const UserCard = ({ name, description, btn, image }) => (
    <div className="md:w-1/3 sm:w-full p-4 ">
        <div className="bg-white rounded-lg shadow-lg h-48 p-4">
            <Image width={100} height={100} src={image} alt="Image" className='h-10 border  w-10  ' />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{`${description}`}</p>
            <p className="text-blue-500 font-semibold ">{btn}</p>
        </div>
    </div>
);
const Hr = async () => {

    const Hr = await gethr();
    // console.log(Hr);

    return (
        <div id="HR" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">HR</div>
                <div>Hire new employees, run training sessions, and manage all HR operations with ease.</div>
            </div>
            <div className="flex flex-wrap ">
                {Hr.map(({ id, name, description, btn, image }) => (
                    <UserCard
                        key={id}
                        id={id}
                        name={name}
                        description={description}
                        btn={btn}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hr;