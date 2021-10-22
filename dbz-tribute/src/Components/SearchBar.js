import React from 'react'

const SearchBar = ({DBZData}) => {
    
    return(
        <div id='search-bar' className="search-bar">
            <input className="search__input" placeholder="search.." type="text"></input>
        </div>
    )
}
export default SearchBar