
import UserCard from "./UserCard/UserCard";
import getbianalytics from "@/app/utils/getbianalytics";




const Bianalytics = async () => {
    
    const Bianalytics = await getbianalytics();

    
    return (
        <div id="BI" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">BI & Analytics</div>
                <div>Bring data to life with appealing visuals and insightful dashboards.</div>
            </div>
            <div className="flex flex-wrap ">
                {Bianalytics.map(({ _id, name, description, btn,image }) => (
              
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

export default Bianalytics;