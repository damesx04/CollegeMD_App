import React from 'react'
import Card from './Card'

const CardList = ({ flashcards }) => {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard => {
                return <Card flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

export default CardList