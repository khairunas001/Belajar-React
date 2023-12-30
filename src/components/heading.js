import React from 'react';

function Heading (props){
    const {name, age} = props.profile
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <p> Age : {age}</p>
            <hr></hr>
        </div>
    )
}

export default Heading