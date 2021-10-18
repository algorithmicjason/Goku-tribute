import Images from './Images';
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
//add pop up for bio and make class toggle visible and invisible 
=======
import Bio from './Bio'
>>>>>>> firstRun

function Card({character}) {

    const [image, setImage] = useState("")
    const [popup, setPopup] = useState(null)

    useEffect(() => {
        setImage(Images[`${character.id}`])
    })

    const openCard = () => {
        popup === null ? setPopup(`${character.id}`) : setPopup(null)
    }



    return (
        <div className="card" id={character.id} onClick={openCard}>
            {/* {console.log(popup.id)} */}
            {/* {console.log(character.id)} */}
            {popup === character.id ? <Bio openCard={openCard} className="bio" image={image} props={character} /> : null }
            <h1 className="card__name">{character.name}</h1>
            <img src={image} alt={`an image of ${character.name}`} className="card__img"/>
            <p className="card__attack">attack: {character.attack}</p>
            <p className="card__defense">defense: {character.defense}</p>
            <p className="card__health">health: {character.health}</p>
        </div>
    )
}

export default Card
