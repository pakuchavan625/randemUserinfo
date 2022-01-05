import React, { useEffect,useState } from 'react'
import axios from "axios"

function UseEffectHook() {
    const [state,setState]=useState("")
    const [count,setCount]=useState(0)
    useEffect(()=>{
       console.log("hello world")
       axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
           
           setState(response.data[10].name)
           console.log("API was called")
       }).catch((err)=>{
           console.log("data not fetched from the given api")
       })
    },[count])
    return (
        <div>
            <div className="container">
                <h1>UseEffect hook </h1>
                <p>It rendeners evrytime the page loads</p>
                {state}
                <p>{count}</p>
                <button onClick={()=>{
                    setCount(count + 1)
                }}>clickMe!</button>
            </div>
        </div>
    )
}

export default UseEffectHook
