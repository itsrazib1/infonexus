

import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getdeveloperplatform from "@/app/utils/getdeveloperplatform";

const Developerplatform = async () => {
    
    const Developerplatform = await getdeveloperplatform();
    
    return (
        <div id="Developer" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Developer Platforms</div>
                <div>Automate business processes, manage custom workflows, and build apps with a choice of no, low, and pro-code tools.</div>
            </div>
            <div className="flex flex-wrap ">
                {Developerplatform.map(({ _id, name, description, btn,image }) => (
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

export default Developerplatform;