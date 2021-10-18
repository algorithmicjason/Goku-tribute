import React from 'react'

const Popup = ({props, image, openCard}) => {
    // debugger

    return(
    <div className="Popup">
        <p className="Popup__close-button" onClick={openCard}>X</p>
        <img src={image} alt={props.name} className="Popup__img" />
        <h1 className="Popup__title">{props.name}</h1>
        <p className="Popup__bio">{props.bio}</p>
        <br></br>
        <h2>Abilities:</h2>
        <ol className="Popup__abilities">
            {props.abilities.map(ability => 
            <li key={ability}>
                {ability}
            </li>)
            }
        </ol>
        
    </div>
    )
}
export default Popup;