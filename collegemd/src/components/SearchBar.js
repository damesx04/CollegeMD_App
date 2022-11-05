import React from 'react';
import './SearchBar.css';

function SearchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder} />
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'>
            {data.map((value, key) => {
                return (
                    <div className='dataItem'> {value.symptom}</div>
                );
            })}
        </div>
    </div>
  );
}


export default SearchBar;