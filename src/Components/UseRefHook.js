import React from 'react'
import { useRef ,useState} from 'react'

function UseRefHook() {
    const[name,setName]=useState("paku")
   const inputRef=useRef(null)
   
   const changedName=()=>{
    inputRef.current.value ="";
    inputRef.current.focus();
  
 
   
   }

   
    return (
        <div>
            <div className="container">
                <h2>This is useRefHook</h2>
                <p>This is use to manuplate the data of the dom without using the documen.getElementById</p>
                <h1>{name}</h1>
                <input type="text" placeholder='Ex..'  ref={inputRef}/>
                <button onClick={changedName}>Change the name</button>
            </div>
        </div>
    )
}

export default UseRefHook
