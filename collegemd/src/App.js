import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SymptomData from './symptoms.json';
import UniqueData from './uniqueSymptoms.json';
import Symptoms from './components/Symptoms';

let noRepeatSymptoms = new Set();

for (let i = 0; i < SymptomData.length; i++) {
  for (let j = 0; j < SymptomData[i].symptoms.length; j++) {
    noRepeatSymptoms.add(SymptomData[i].symptoms[j]);
  }
}

function App() {
  return (
    <div className="App">
    <Symptoms />
    <SearchBar placeholder="Enter a symptom" data={UniqueData} />
    </div>
  );
}

export default App;
