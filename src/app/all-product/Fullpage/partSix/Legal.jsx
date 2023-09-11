
"use client"
import {getLegal} from "@/app/utils/getLegal";
import UserCard from "./UserCard/UserCard";
import { useEffect, useState } from "react";


const Legal =  () => {
    const [Legal, setLegalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLegal();
        setLegalData(data);
      } catch (error) {
        console.error('Error fetching Legal data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <div id="Legal" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Legal</div>
                <div>Streamline contract processes, mitigate risks, and improve your legal operations efficiency.</div>
            </div>
            <div className="flex flex-wrap ">
                {Legal.map(({ _id, name, description, btn, image,services }) => (
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

export default Legal;