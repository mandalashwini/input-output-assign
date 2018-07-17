import React from 'react'
const UserInput = (props) => {
    return(
        <div className="UserInput">
        <p>Username:- 
        <input type="text" onChange={props.changed} defaultValue={props.name} style={props.style}/>
        </p>
        </div>
    );
}
export default UserInput;