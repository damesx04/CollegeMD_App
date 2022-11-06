import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SymptomData from './symptoms.json';
import UniqueData from './uniqueSymptoms.json';
import Symptoms from './components/Symptoms';

let noRepeatSymptoms = new Set();

const data = [
  {
      id: 1,
      name: "flu",
      symptoms: ["fever, ", "cough, ", "sore throat, ", "sinus pressure, ", "muscle aches, ", "headache, ", "fatigue, "]
  },
  {
      id: 2,
      name: "covid", 
      symptoms: ["fever, ", "cough, ", "sore throat, ", "nausea, ", "vomiting, ", "fatigue, ", "muscle aches, ", "loss of taste/smell, ", "runny nose, ", "shortness of breath, "]
  },
  {   
      id: 3,
      name: "cold",
      symptoms: ["fever, ", "sneezing, ", "cough, ", "sore throat, ", "watery eyes, ", "runny nose, "]
  },
  {
      id: 4,
      name: "pinkEye",
      symptoms: ["visible inflamation, ", "discharge, ", "itching, "]
  },
  {
      id: 5,
      name: "mononucleosis",
      symptoms: ["fatigue, ", "sore throat, ", "fever, ", "swollen lymph nodes, ", "skin rash, ", "headache, "]
  },
  {
      id: 6,
      name: "stomachBug",
      symptoms: ["diarrhea, ", "nausea, ", "vomiting, ", "fever, ", "stomach cramps and pain, "]
  },
  {
      id: 7,
      name: "strepThroat",
      symptoms: ["pain swallowing, ", "swollen lymph nodes, ", "sore throat, ", "fever, "]
  },
  {
      id: 8,
      name: "uti",
      symptoms: ["bloody urine, ", "frequent urination, ", "pain urinating, "]
  },
  {
      id: 9,
      name: "foodPoisoning",
      symptoms: ["stomach cramps and pain, ", "fever, ", "nausea, ", "vomiting, ", "diarrhea, "]
  },
  {
      id: 10,
      name: "sinusInfection",
      symptoms: ["runny nose, ", "sinus pressure, ", "headache, ", "sore throat, ", "congestion, "]
  },
  {
       id: 11,
       name: "allergies",
       symptoms: ["sneezing, ", "runny nose, ", "rashes, ", "watery eyes, "]
  },
  {
      id: 12,
      name: "gonorrhea",
      symptoms: []
  }
]

for (let i = 0; i < SymptomData.length; i++) {
  for (let j = 0; j < SymptomData[i].symptoms.length; j++) {
    noRepeatSymptoms.add(SymptomData[i].symptoms[j]);
  }
}

function App() {
  const [cards, setCards] = useState(data)

  return (
    <div className="App">
    <Symptoms />cd 
    <SearchBar placeholder="Enter a symptom" data={UniqueData} />
    <Card flashcards={cards} />
    </div>
  );
}

export default App;
