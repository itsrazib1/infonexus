
import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getFinances from "@/app/utils/getFinances";



const Finance = async () => {
    
    const Finance = await getFinances();

    return (
        <div id="Finance" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Finance</div>
                <div>Keep a tab on your expenses and manage your back office operations smoothly.</div>
            </div>
            <div className="flex flex-wrap ">
                {Finance.map(({ _id, name, description, btn,image }) => (
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

export default Finance;