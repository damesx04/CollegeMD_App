import React, { useState } from "react";
import "./SearchBar.css";
import Symptoms from "./Symptoms";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [chosenSymptom, setChosenSymptom] = useState("");
  const [symptomList, setSymptomList] = useState([]);
  // let list = [];

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
  }

  return (
    <div>
    <div className="symptom-list">Symptoms: {symptomList.map(symptom => (
      <div>{symptom}</div>
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
        {/* <Symptoms symptoms={chosenSymptom}/> */}
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