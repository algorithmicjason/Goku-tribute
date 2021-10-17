import React from 'react'

const Bio = ({props}) => {
    // debugger
    // console.log(props.bio)
    return(
    <div className="Bio__Popup">
        <h1>{props.name}</h1>
        <p>{props.bio}</p>
    </div>
    )
}
export default Bio;