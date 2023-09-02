
"use client"
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import { getdeveloperplatform } from "@/app/utils/getdeveloperplatform";

const Developerplatform =  () => {
    const [Developerplatform, setDeveloperplatformData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getdeveloperplatform();
          setDeveloperplatformData(data);
        } catch (error) {
          console.error('Error fetching Developerplatform data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div id="Developer" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Developer Platforms</div>
                <div>Automate business processes, manage custom workflows, and build apps with a choice of no, low, and pro-code tools.</div>
            </div>
            <div className="flex flex-wrap ">
                {Developerplatform.map(({ _id, name, description, btn, image }) => (
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