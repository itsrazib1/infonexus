import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicButton = dynamic(() => import("./DynamicButton"), {
  ssr: false, // This ensures the component is only rendered on the client side
});

const UserCard = ({ name, description, btn, image, id }) => {
  return (
    <div className="md:w-1/3 sm:w-full p-4 ">
      <div className="bg-white rounded-lg shadow-lg h-[210px] p-4">
        <Image width={100} height={100} src={image} alt="Image" className='h-10 border w-10' />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <DynamicButton name={name} image={image} description={description} id={id}/>
      </div>
    </div>
  );
};

export default UserCard;


// import Image from "next/image";

// const UserCard = ({ name, description, btn, image }) => {
//   const handelAddToCart = () => {
//     const cartItem = { name, image, description };
//     fetch("http//localhost:3000/api/trynow", {
//       method: "POST",
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(cartItem)
//     });
//   };

//   return (
//     <div className="md:w-1/3 sm:w-full p-4 ">
//       <div className="bg-white rounded-lg shadow-lg h-48 p-4">
//         <Image width={100} height={100} src={image} alt="Image" className='h-10 border w-10' />
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-gray-600">{description}</p>
//         <button onClick={handelAddToCart} className="text-blue-500 font-semibold">Try Now</button>
//       </div>
//     </div>
//   );
// };

// export default UserCard;