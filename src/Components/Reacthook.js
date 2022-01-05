import React ,{useState}from 'react'

function Reacthook() {
    const [name,setName]=useState('paku');
    const [count,setCount]=useState(0);
    const [inputvalue,setInputValue]=useState("prakash")


    const changeName=()=>{
        setName("priya")
    }
    
    let changethevalue=(e)=>{
        const newValue= e.target.value
        setInputValue(newValue)
    }


    return (
        <>
         <div>
            <h1>hello ,{name }</h1>
        
        </div>
        <button onClick={changeName}>clickMe!</button>
        <h2>{count}</h2>
       <div>
           <input type="text" placeholder='enter something '  onChange={changethevalue}/>
           {inputvalue}
       </div>
        </>
       
    )
}

export default Reacthook
