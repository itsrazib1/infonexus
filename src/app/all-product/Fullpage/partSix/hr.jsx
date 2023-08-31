

import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import gethr from "@/app/utils/gethr";




const Hr = async () => {

    const Hr = await gethr();

    return (
        <div id="HR" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">HR</div>
                <div>Hire new employees, run training sessions, and manage all HR operations with ease.</div>
            </div>
            <div className="flex flex-wrap ">
                {Hr.map(({ _id, name, description, btn, image }) => (
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

export default Hr;