import React,{useReducer} from 'react'


 const reducer=(state,action)=>{
     switch (action.type) {
         case "Increment":
             return({counter : state.counter+1 , showText:state.showText} );
         case "Decrement":
             return({counter : state.counter-1 , showText:state.showText} );
            
       
         case "toogleshowtext":

              return({counter : state.counter+1 , showText:!state.showText} );
         
         default:
             return state
      
     }
 }
function UseReducerHook() {
const [state, dispatch] = useReducer(reducer, {
    counter:0, showText:true
})
   
    return (
        <>
        <div>
            <h1>this is use reducer hook its alternative for useStae</h1>
            <h1>{state.counter}</h1>
            <button onClick={()=>{
                dispatch({type :"Increment"})
                dispatch({type :"toogleshowtext"})
               
            }}>clickme</button>
            <button onClick={()=>{
                dispatch({type :"Increment"})
                dispatch({type :"Decrement"})
            }}>decrement</button>
            {state.showText && <p>this is text</p>}
        </div>
        <div>

        </div>
        </>
        
    )
}

export default UseReducerHook
