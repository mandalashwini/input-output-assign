import React from 'react'
import './UserOutput.css'
const UserOutput = (props) => {
    return(
        <div className="UserOutput">
        <p>Hello, {props.name}</p>
        <p>Welcome To React</p>
        </div>
    )
}
export default UserOutput;