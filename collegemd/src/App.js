import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.js";
import SymptomData from "./symptoms.json";
import UniqueData from "./uniqueSymptoms.json";
import Symptoms from "./components/Symptoms.js";
import Card from "./components/Card.js";
import CardList from "./components/CardList.js";
import tempSymptoms from './tempSymptoms.json';
import { Chart } from "react-google-charts";
import PieChart from "./components/Piechart";


let noRepeatSymptoms = new Set();

for (let i = 0; i < SymptomData.length; i++) {
  for (let j = 0; j < SymptomData[i].symptoms.length; j++) {
    noRepeatSymptoms.add(SymptomData[i].symptoms[j]);
  }
}

function App() {
  const [cards, setCards] = useState(data);


  return (
    <div className="container">
      <div className="header">
        {/* <Symptoms className="symptoms" /> */}
        <SearchBar
          className="Search"
          placeholder="Enter a symptom"
          data={UniqueData}
        />
      </div>
      <div className="lower">
        <CardList className="cards" flashcards={data} />
        <PieChart/>
      </div>
      {/* <PieChart /> */}
    </div>
  );
}

const data = SymptomData
// const fs = require('fs');
// fs.writeFile('/tempSymptoms.json', JSON.stringify(data), err => {
//   if (err) console.log("error writing file:", err); else console.log("success");
// })

export default App