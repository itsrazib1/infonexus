"use client"
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import {getbianalytics} from "@/app/utils/getbianalytics";

const Bianalytics =  () => {

    const [Bianalytics, setBianalyticsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getbianalytics();
            console.log("Fetched data:", data); // Log the fetched data
            setBianalyticsData(data);
          } catch (error) {
            console.error('Error fetching BI & Analytics data:', error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <div id="BI" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">BI & Analytics</div>
                <div>Bring data to life with appealing visuals and insightful dashboards.</div>
            </div>
            <div className="flex flex-wrap ">
                {Bianalytics.map(({ _id, name, description, btn, image,services }) => (

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

export default Bianalytics;