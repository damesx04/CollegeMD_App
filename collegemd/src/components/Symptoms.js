import React from 'react'
import './Symptoms.css';

let list = [];
export default function Symptoms({symptoms}) {
  
  list = list.concat(symptoms);
  return (
    <div className='Header'>Symptoms:
    <div>{list}</div>
    </div>
  )
}
