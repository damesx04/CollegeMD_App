import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

let noRepeats = new Set();

function SearchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className='searchInputs'>
            <input type='text' placeholder={placeholder} />
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'>
            {data.map((value, key) => {
                noRepeats.add(value.symptoms);
                return <div>{noRepeats}</div>;
            })}
        </div>
    </div>
  );
}

export default SearchBar;