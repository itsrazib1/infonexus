"use client"

import { getEmailCollaboration } from "@/app/utils/getEmailCollaboration";
import UserCard from "./UserCard/UserCard";
import { useEffect, useState } from "react";





const EmailCollaboration =  () => {

    const [EmailCollaboration, setEmailCollaborationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmailCollaboration();
        setEmailCollaborationData(data);
      } catch (error) {
        console.error('Error fetching EmailCollaboration data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div id="Email" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Email & Collaboration</div>
                <div>Create, collaborate, and communicate with your teams and customers.</div>
            </div>
            <div className="flex flex-wrap ">
                {EmailCollaboration.map(({ _id, name, description, btn, image,services }) => (
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

export default EmailCollaboration;