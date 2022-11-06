import React, { useState } from "react";
import "./SearchBar.css";
import Symptoms from "./Symptoms";
import "../App.js"
import SymptomData from "../symptoms.json";
import { getDatabase, ref, set, get } from 'firebase/database'

async function updateUserBoolean(ill, symptom, data) {
  const db = getDatabase();
  let truth = false
  for (let i = 0; i < data.length; i++) {
    if ((symptom + ", ") === data[i])
    {
      truth = true
    }
  }
    
  set(ref(db, 'status/' + ill), {
      display: truth
    }
  )};

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [chosenSymptom, setChosenSymptom] = useState("");
  const [symptomList, setSymptomList] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.symptom.toLowerCase().includes(searchWord.toLowerCase());
    });


    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const clicked = (value) => {
    setChosenSymptom(value);
    symptomList.push(value);
    for(let i = 0; i < SymptomData.length; i++)
    {
      for(let j = 0; j < SymptomData[i]["symptoms"].length; j++)
      {
        updateUserBoolean(SymptomData[j].name, value, SymptomData[j]["symptoms"])
      }
    }
  }

  return (
    <div>
    <div className="symptom-list">Symptoms: &nbsp;{symptomList.map(symptom => (
      <div>{symptom},&nbsp;</div>
    ))} </div>
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            "🔍"
          ) : (
            <div id="clearBtn" onClick={clearInput}>
              ❌
            </div>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return <div className="dataItem" onClick={() => clicked(value.symptom)}> {value.symptom}</div>;
          })}
        </div>
      )}
    </div>
    </div>
  );
}

export default SearchBar;