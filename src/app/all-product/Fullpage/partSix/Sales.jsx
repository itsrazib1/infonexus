
"use client"
import UserCard from "./UserCard/UserCard";
import { getSales } from "@/app/utils/getsales";
import { useEffect, useState } from "react";




const Sales = () => {

  const [sales, setSalesData] = useState([]);
  console.log(sales)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSales();
        setSalesData(data);
      } catch (error) {
        console.error('Error fetching sales data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="sales" className="container mx-auto p-8">
      <div>
        <div className="text-3xl">Sales</div>
        <div>Help your sales team be more productive with tools they love.</div>
      </div>
      <div className="flex flex-wrap ">
        {sales.map(({ _id, name, description, btn, image, services }) => (
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

export default Sales;