import Images from './Images';
import React, { useState, useEffect } from 'react'

function Card({character}) {

    const [image, setImage] = useState("")
    const [popup, setPopup] = useState("")

    useEffect(() => {
        setImage(Images[`${character.id}`])
    })

    const openCard = () => {
        setPopup(character.id)
        window.alert(character.bio)
    }



    return (
        <div className="card" id={character.id} onClick={openCard}>
            <h1 className="card__name">{character.name}</h1>
            <img src={image} alt={`an image of ${character.name}`} className="card__img"/>
            <p className="card__attack">attack: {character.attack}</p>
            <p className="card__defense">defense: {character.defense}</p>
            <p className="card__health">health: {character.health}</p>
        </div>
    )
}

export default Card
