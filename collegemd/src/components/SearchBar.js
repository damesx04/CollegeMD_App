import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

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

  const chosen = () => {
    console.log("FFF", filteredData);
    for (let i = 0; i < filteredData.length; i++) {
    console.log(filteredData[i].symptom);
    }
  };

  return (
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
      {filteredData.length != 0 && (
        <div className="dataResult" onClick={chosen}>
          {filteredData.map((value, key) => {
            return <div className="dataItem"> {value.symptom}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
