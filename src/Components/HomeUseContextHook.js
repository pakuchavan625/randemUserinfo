import React ,{useContext} from 'react'
import { LoginContext } from '../Helper/Context';


function HomeUseContextHook() {
    const {loggedIn,setLoggedIn}= useContext(LoginContext)

    const changethelogin=()=>{
        setLoggedIn(true)
    }
    return (
        <div style={{
            width:"300px",
            height:"150px",
            border:"1px solid red",
            margin:"auto"
        }}>
            this is Home page
            {loggedIn ? <h2>You are LoggedIn</h2> : <h2>You are not loggedIn</h2>}
            
        </div>
    )
}

export default HomeUseContextHook
