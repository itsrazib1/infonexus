

import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getSales from "@/app/utils/getsales";




const Sales = async () => {

    const sales = await getSales();

    return (
        <div id="sales" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Sales</div>
                <div>Help your sales team be more productive with tools they love.</div>
            </div>
            <div className="flex flex-wrap ">
                {sales.map(({ _id, name, description, btn, image }) => (
                    <UserCard
                        key={_id}
                        id={_id}
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

export default Sales;