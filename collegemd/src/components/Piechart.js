import React from "react";
import { Chart } from "react-google-charts";
import { getDatabase, ref, child, get, onValue} from "firebase/database";
import { FirebaseError } from "firebase/app";
import { getAuth } from "firebase/auth";

export const data = [
    ["Disease", "Cases"],
    ["Flu", 6],
    ["Covid", 14],
    ["Cold", 17],
    ["Pink Eye", 9],
    ["Mononucleosis", 1],
    ["Stomach Bug", 3],
    ["Strep Throat", 3],
    ["UTI", 2],
    ["Food Poisoning", 7],
    ["Sinus Infection", 6],
    ["Allergies", 5],
    ["Upper Respiratory Infection", 3]
];

export const options = {
    title: "Common College Disease Cases",
    backgroundColor: '#ADD8E6'
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