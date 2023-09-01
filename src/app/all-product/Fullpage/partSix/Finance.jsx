"use client"
import UserCard from "./UserCard/UserCard";
import {getFinances} from "@/app/utils/getFinances";
import { useEffect, useState } from "react";



const Finance =  () => {

    const [Finance, setFinanceData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getFinances();
          setFinanceData(data);
        } catch (error) {
          console.error('Error fetching Finance data:', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div id="Finance" className="container mx-auto p-8">
            <div>
                <div className="text-3xl">Finance</div>
                <div>Keep a tab on your expenses and manage your back office operations smoothly.</div>
            </div>
            <div className="flex flex-wrap ">
                {Finance.map(({ _id, name, description, btn, image }) => (
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

export default Finance;