import Images from './Images';
import React, { useState, useEffect } from 'react'
import Bio from './Bio'

function Card({character}) {

    const [image, setImage] = useState("")
    const [popup, setPopup] = useState(null)

    useEffect(() => {
        setImage(Images[`${character.id}`])
    })

    const openCard = () => {
        // debugger
        setPopup(`${character.id}`)
        // popup === e.target.value ? setPopup(character) 
        // setPopup(character.id)
        
    }



    return (
        <div className="card" id={character.id} onClick={openCard}>
            {/* {console.log(popup.id)} */}
            {/* {console.log(character.id)} */}
            {popup === character.id ? <Bio className="bio" props={character} /> : null }
            <h1 className="card__name">{character.name}</h1>
            <img src={image} alt={`an image of ${character.name}`} className="card__img"/>
            <p className="card__attack">attack: {character.attack}</p>
            <p className="card__defense">defense: {character.defense}</p>
            <p className="card__health">health: {character.health}</p>
        </div>
    )
}

export default Card
