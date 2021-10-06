import Images from './Images';
import React, { useState, useEffect } from 'react'

function Card({character}) {

    const [image, setImage] = useState("")

    useEffect(() => {
        setImage(Images[`${character.id}`])
    })

    const openCard = () => {
        
    }



    return (
        <div className="card" onClick={openCard}>
            <h1 className="card__name">{character.name}</h1>
            <img src={image} alt="" className="card__img"/>
            <p className="card__health">health: {character.health}</p>
            <p className="card__attack">attack: {character.attack}</p>
            <p className="card__defense">defense: {character.defense}</p>
        </div>
    )
}

export default Card
