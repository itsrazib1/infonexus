import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
    "Madagascar",
    "Papua New Guinea",
    "Rwanda",
    "Average",
  ],
  ["2020", 165, 938, 522, 998, 450, 614.6],
  ["2021", 135, 1120, 599, 1268, 288, 682],
  ["2022", 157, 1167, 587, 807, 397, 623],
  ["2023", 139, 1110, 615, 968, 215, 609.4],
];

export const options = {
  title: "The success of your chosen product",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
};

const Selected = () => {
  return (
    <Chart
      chartType="ComboChart"
      width={"100%"}
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Selected;