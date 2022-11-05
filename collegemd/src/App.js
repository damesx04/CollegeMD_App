import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SymptomData from './symptoms.json';

let noRepeatSymptoms = new Set(SymptomData.symptoms);

function App() {
  return (
    <div className="App">
    <SearchBar placeholder="Enter a symptom" data={SymptomData} />
    </div>
  );
}

console.log(noRepeatSymptoms);
console.log(0);
console.log(SymptomData);
export default App;
