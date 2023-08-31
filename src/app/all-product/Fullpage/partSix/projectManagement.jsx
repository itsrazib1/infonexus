

import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getprojectManagement from "@/app/utils/getprojectManagement";


const ProjectManagement = async () => {
    
    const ProjectManagement = await getprojectManagement();
    
    return (
        <div id="Project" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Project Management</div>
                <div>Choose a project management style that suits your business the best.</div>
            </div>
            <div className="flex flex-wrap ">
                {ProjectManagement.map(({ _id, name, description, btn,image }) => (
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

export default ProjectManagement;