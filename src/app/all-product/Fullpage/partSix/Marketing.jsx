
"use client"
import { useEffect, useState } from "react";
import UserCard from "./UserCard/UserCard";
import { getMarketings } from "@/app/utils/getMarketings";



const Marketing = () => {
  const [Marketing, setMarketings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMarketings();
        setMarketings(data);
      } catch (error) {
        console.error('Error fetching Legal data:', error);
      }
    };

    fetchData();
  }, []);
  console.log(Marketing)

  return (
    <div id="Marketing" className="container  mx-auto p-8">
      <div>
        <div className="text-3xl">Marketing</div>
        <div>Engage with prospects using multi-channel marketing tools that help you personalize experiences at scale.</div>
      </div>
      <div className="flex flex-wrap ">
        {Marketing.map(({ _id, name, description, btn, image, services }) => (
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

export default Marketing;