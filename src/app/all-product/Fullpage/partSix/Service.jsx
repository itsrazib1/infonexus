


import UserCard from "./UserCard/UserCard";
import getServices from "@/app/utils/getServices";




const Service = async () => {
    
    const Service = await getServices();
    
    return (
        <div id="Service" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Service</div>
                <div>Empower your customer and field service teams to deliver happiness and win trust.</div>
            </div>
            <div className="flex flex-wrap ">
                {Service.map(({ _id, name, description, btn,image }) => (
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

export default Service;