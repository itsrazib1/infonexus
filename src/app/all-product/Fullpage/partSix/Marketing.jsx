

import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getMarketings from "@/app/utils/getMarketings";



const Marketing = async () => {
    const Marketing = await getMarketings();
   
    return (
        <div id="Marketing" className="container  mx-auto p-8">
            <div>
                <div className="text-3xl">Marketing</div>
                <div>Engage with prospects using multi-channel marketing tools that help you personalize experiences at scale.</div>
            </div>
            <div className="flex flex-wrap ">
                {Marketing.map(({ _id, name, description, btn, image }) => (
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

export default Marketing;