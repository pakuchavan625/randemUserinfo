import React, { useReducer } from 'react'





const reducer=(state,action)=>{
 switch (action.type) {
     case "add":
         return({count:state.count+1});
    
     case "sub":
        return({count:state.count-1});
     
     case "reset":
        return({count:0});
      
     default:
         return('no result found')
     
 }
}
function UserReducerTwo() {
    const [state, dispatch] = useReducer(reducer, {
        count:0
    })
    return (
        <div style ={{backgroundColor:"blueviolet",width:"100px",paddingBottom:"30px"}}>
            <h1>{state.count}</h1>
            <button onClick={()=>{
                dispatch({type :"add"})
            }}>add</button><br></br>
            <button 
            onClick={()=>{
                dispatch({type :"sub"})
            }}>sub</button><br></br>
            <button
            onClick={()=>{
                dispatch({type :"reset"})
            }}>reset</button>
        </div>
    )
}

export default UserReducerTwo
