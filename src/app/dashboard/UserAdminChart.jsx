import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Sales Services", 9],
  ["Marketings Services", 14],
  ["Finances Services", 6],
  ["Email Collaboration Services", 19],
  ["HR Services", 6],
  ["Bianalytics Services", 3],
];

export const options = {
  title: "Success of our products",
  is3D: true,
};

const UserAdminChart = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
export default UserAdminChart;