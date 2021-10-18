import React, { useEffect, useState } from 'react'
import Card from './Card'
import SearchBar from './SearchBar'

function CardContainer() {

const url = ('https://raw.githubusercontent.com/andrewbaisden/dragonball-character-database/master/client/db.json')

const [DBZData, updateDBZData] = useState([]);
const [background, updateBackground] = useState(null);

const fetchData = async () => {
    let data = await fetch(url);
    let res = await data.json();

    updateDBZData(res.characters)
}

// const changeBackground = () => {
//     background === null ? 
// }

useEffect(() => {
    fetchData();
}, [])

    return (
        <div>
            <SearchBar />
            <div className='container'>
                {DBZData.map(character => <Card character={character} key={character.id} />)}
            </div>
        </div>
    )
}

export default CardContainer
