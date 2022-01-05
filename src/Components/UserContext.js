import React,{useContext} from 'react'
import {userContext} from "../Helper/Context"

function UserContext() {
    const {userName}=useContext(userContext)
    return (
        <div>
            <h2>user:{userName}</h2>
        </div>
    )
}

export default UserContext
