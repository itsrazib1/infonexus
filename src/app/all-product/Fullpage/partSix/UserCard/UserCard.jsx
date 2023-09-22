import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import("./DynamicButton"), {
  ssr: false, // This ensures the component is only rendered on the client side
});

const UserCard = ({ name, description, services, image, id }) => {
  

  return (
    <div className="md:w-1/3 sm:w-full p-4 ">
      <div className="bg-white rounded-lg shadow-lg h-[220px] p-4">
        <Image width={100} height={100} src={image} alt="Image" className='h-10 border w-10' />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <DynamicButton name={name} image={image} description={description} id={id} services={services} />
      </div>
    </div>
  );
};

export default UserCard;

