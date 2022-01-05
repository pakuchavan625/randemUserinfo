import React,{useContext} from 'react'
import {userContext} from "../Helper/Context"
function LoginContext() {

    const {setUserName}=useContext(userContext)
    return (
        <div>
              <input type="text" onChange={(e)=>{
                  const input=e.target.value;
                  setUserName(input)
              }} />
        </div>
    )
}

export default LoginContext
