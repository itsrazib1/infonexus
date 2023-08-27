
import getSales from "@/app/utils/getsales";
import Image from "next/image";

<<<<<<< HEAD:src/app/all-product/Fullpage/partSix/PartSix.jsx
const UserCard = ({ name, discription, btn, image }) => (
=======


const UserCard = ({  name, discription, btn,image }) => (
>>>>>>> 926f72ae05dd19a429e961b25c6b74f089f9131f:src/app/all-product/Fullpage/partSix/Sales.jsx
    <div className="md:w-1/3 sm:w-full p-4 ">
        <div className="bg-white rounded-lg shadow-lg h-48 p-4">
            <Image width={100} height={100} src={image} alt="Image" className='h-10 border  w-10  ' />
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{`${discription}`}</p>
            <p className="text-blue-500 font-semibold ">{btn}</p>
        </div>
    </div>
);
const Sales = async () => {
    
const sales = await getSales();
console.log(sales);
    return (
        <div id="sales" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Sales</div>
                <div>Help your sales team be more productive with tools they love.</div>
            </div>
            <div className="flex flex-wrap ">
<<<<<<< HEAD:src/app/all-product/Fullpage/partSix/PartSix.jsx
                {UserData.map(({ id, name, discription, btn, image }) => (
=======
                {sales.map(({ id, name, discription, btn,image }) => (
>>>>>>> 926f72ae05dd19a429e961b25c6b74f089f9131f:src/app/all-product/Fullpage/partSix/Sales.jsx
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

export default Sales;