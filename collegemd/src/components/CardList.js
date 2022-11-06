import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ flashcards }) => {
    return (
        <div className="card-grid" >
            {flashcards.map(flashcard => {
                return <Card flashcard={flashcard}/>
            })}
        </div>

    )
}

export default CardList