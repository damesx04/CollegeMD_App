import React from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Disease", "Cases"],
    ["Cold", 10],
    ["Flu", 12],
    ["Mono", 8],
    ['AIDS', 15]
];

export const options = {
    title: "Common College Disease Cases"
};

function PieChart() {
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

export default PieChart;