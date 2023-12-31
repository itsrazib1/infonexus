"use client"
import UserCard from "./UserCard/UserCard";
import { gethr } from "@/app/utils/gethr";
import { useEffect, useState } from "react";




const Hr =  () => {

    const [Hr, setHrData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await gethr();
        setHrData(data);
      } catch (error) {
        console.error('Error fetching HR data:', error);
      }
    };

    fetchData();
  }, []);


    return (
        <div id="HR" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">HR</div>
                <div>Hire new employees, run training sessions, and manage all HR operations with ease.</div>
            </div>
            <div className="flex flex-wrap ">
                {Hr.map(({ _id, name, description, btn, image,services }) => (
                    <UserCard
                        key={_id}
                        id={_id}
                        name={name}
                        description={description}
                        btn={btn}
                        image={image}
                        services={services}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hr;