"use client"
import UserCard from "./UserCard/UserCard";
import { getprojectManagement } from "@/app/utils/getprojectManagement";
import { useEffect, useState } from "react";


const ProjectManagement =  () => {

    const [ProjectManagement, setMarketingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getprojectManagement();
        setMarketingData(data);
      } catch (error) {
        console.error('Error fetching Marketing data:', error);
      }
    };

    fetchData();
  }, []);


    return (
        <div id="Project" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Project Management</div>
                <div>Choose a project management style that suits your business the best.</div>
            </div>
            <div className="flex flex-wrap ">
                {ProjectManagement.map(({ _id, name, description, btn, image,services }) => (
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

export default ProjectManagement;