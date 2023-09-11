"use client"
import UserCard from "./UserCard/UserCard";
import {getsecurityITManagement} from "@/app/utils/getsecurityITManagement";
import { useEffect, useState } from "react";




const SecurityITManagement =  () => {


    const [SecurityITManagement, setMarketingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getsecurityITManagement();
        setMarketingData(data);
      } catch (error) {
        console.error('Error fetching Marketing data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div id="Security" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Security & IT Management</div>
                <div>Manage IT assets using ready tools or create a custom application to suit your needs.</div>
            </div>
            <div className="flex flex-wrap ">
                {SecurityITManagement.map(({ _id, name, description, btn, image,services }) => (
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

export default SecurityITManagement;