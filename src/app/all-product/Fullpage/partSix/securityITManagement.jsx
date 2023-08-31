
import Image from "next/image";
import UserCard from "./UserCard/UserCard";
import getsecurityITManagement from "@/app/utils/getsecurityITManagement";




const SecurityITManagement = async () => {
    
    const SecurityITManagement = await getsecurityITManagement();
  
    return (
        <div id="Security" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Security & IT Management</div>
                <div>Manage IT assets using ready tools or create a custom application to suit your needs.</div>
            </div>
            <div className="flex flex-wrap ">
                {SecurityITManagement.map(({ _id, name, description, btn,image }) => (
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

export default SecurityITManagement;