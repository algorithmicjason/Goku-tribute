import Images from './Images';
import React, { useState, useEffect } from 'react'
import Popup from './Popup'

function Card({character}) {

    const [image, setImage] = useState("")
    const [popup, setPopup] = useState(null)
    const [page, setPage] = useState(null)

    useEffect(() => {
        setImage(Images[`${character.id}`])
    })

    const openCard = () => {
        popup === null ? setPopup(`${character.id}`) : setPopup(null) 
        page === null ? setPage('card-bg') : setPage(null)
    }



    return (
        <div className="card" id={character.id} onClick={openCard}>
            <div id={page}>
                {popup === character.id ? <Popup openCard={openCard} image={image} props={character} /> : null }
                <h1 className="card__name">{character.name}</h1>
                <img src={image} alt={character.name} className="card__img"/>
                <p className="card__attack">attack: {character.attack}</p>
                <p className="card__defense">defense: {character.defense}</p>
                <p className="card__health">health: {character.health}</p>
            </div>
        </div>
    )
}

export default Card
