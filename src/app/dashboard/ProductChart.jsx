import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Product"],
  ["2020", 1000, 400],
  ["2021", 1170, 460],
  ["2022", 660, 1120],
  ["2023", 1030, 540],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2021-2023",
  },
};

const ProductChart = () => {
  return (
    <Chart
    className="ngh p-3"
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}


export default ProductChart;