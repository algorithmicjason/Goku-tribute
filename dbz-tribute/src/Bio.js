import React from 'react'

const Bio = ({props, image, openCard}) => {
    // debugger
    // console.log(props.bio)
    return(
    <div className="Bio__Popup">
        <p className="Bio__close--button" onClick={openCard}>X</p>
        <img src={image} className="Popup__img" />
        <h1 className="Popup_title">{props.name}</h1>
        <p className="Popup_bio">{props.bio}</p>
        <br></br>
        <h2>Abilities:</h2>
        <ol className="Popup_abilities">
            {props.abilities.map(ability => 
            <li key={ability}>
                {ability}
            </li>)
            }
        </ol>
        
    </div>
    )
}
export default Bio;