import React from 'react'
import './Card.css';
import '../index.js'
import { getDatabase, ref, set, get, child, increment } from 'firebase/database'

async function updateUserData(ill, num) {
    const db = getDatabase();
    set(ref(db, 'Sicknesses/' + ill), {
      count: increment(1)
    })
    console.log(num)};

const Card = ({ flashcard }) => {
    const [front, setFront] = React.useState(true);
    const [length, setLength] = React.useState()
    const dbRef = ref(getDatabase());
    return (
        <div className='card' onClick={() => setFront(!front)}>
        <div className='card-inner'>
        {front ? (
        <div className='front' >{flashcard.name}</div>) : 
        (<div className='back'>
            <div className='symptoms-title'>Symptoms:</div>
            <div className='symptoms-symptoms'>{flashcard.symptoms}</div>
            <a className='link' href={flashcard.link} target="_blank" onClick={() => updateUserData(flashcard.name, get(child(dbRef, `Sicknesses/${flashcard.name}`)).then((snapshot) => Number(snapshot.val())))}>Link for more info</a>
        </div>)}
        </div>   
        </div>
    )
}

export default Card