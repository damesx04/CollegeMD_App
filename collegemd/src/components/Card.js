import React from 'react'
import './Card.css';

const Card = ({ flashcard }) => {
    const [front, setFront] = React.useState(true);
    return (
        <div className='card' onClick={() => setFront(!front)}>
        {front ? (
        <div className='front' >{flashcard.name}</div>) : 
        (<div className='back'>
            <div className='symptoms-title'>Symptoms:</div>
            <div className='symptoms-symptoms'>{flashcard.symptoms}</div>
            <a className='link' href={flashcard.link} target="_blank">Link for more info</a>
        </div>)}
            
        </div>
    )
}

export default Card