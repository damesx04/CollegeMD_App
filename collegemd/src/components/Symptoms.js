import React from 'react'
import './Symptoms.css';
import filteredData from './SearchBar';

export default function Symptoms() {
  return (
    <div className='Header'>Symptoms: {filteredData}</div>
  )
}
