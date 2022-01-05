import React ,{useContext} from 'react'
import { LoginContext } from '../Helper/Context';

function LoginUseContextHook() {
    const {loggedIn,setLoggedIn}= useContext(LoginContext)

    const changethelogin=()=>{
        setLoggedIn(true)
    }
    return (
        <div style={{
            width:"300px",
            height:"150px",
            border:"1px solid yellow",
            margin:"auto",

            color:"green"
        }}>
           this is login page
           <button style={{width:"100px",height:"20px",fontSize:"10px",float:"right"}} onClick={changethelogin}>Click Me to Login</button>
           {loggedIn ? <h2>You are LoggedIn</h2> : <h2>You are not loggedIn</h2>}
        </div>
    )
}

export default LoginUseContextHook
