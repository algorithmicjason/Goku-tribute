import React, { useEffect, useState } from 'react'
import Card from './Card'

function CardContainer() {

const url = ('https://raw.githubusercontent.com/andrewbaisden/dragonball-character-database/master/client/db.json')

const [current, updateCurrent] = useState([]);

const fetchy = async () => {
    let data = await fetch(url);
    let res = await data.json();

    updateCurrent(res.characters)
    
}

useEffect(() => {
    fetchy();
}, [])

    return (
        <div className='container'>
            {current.map(character => <Card character={character} key={character.id} />)}
        </div>
    )
}

export default CardContainer
