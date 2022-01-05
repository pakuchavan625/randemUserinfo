import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");
    const handleUpClick = ()=>{
        let newText=text.toUpperCase()
        setText(newText)
    };
    const handleLowerClick = ()=>{
        let newText=text.toLowerCase()
        setText(newText)
    };
    const handleClearClick = ()=>{
        let newText=''
        setText(newText)
    };
    const handleCopyClick = ()=>{
        let newText=document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value)
    
    };
   
    const handleOnChange = (event)=>{
        console.log("upper case was clicked");
  setText(event.target.value)
    };

    
    return (
          <div className="container my-5" style ={{color:props.mode=== 'dark'? 'white':'#042743' }} >
              <h1>{props.heading} </h1>
               <div className="mb-3">
               <textarea className="form-control" value={text}
               onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" style ={{backgroundColor:props.mode=== 'dark'? 'grey':'light' }} ></textarea>
             </div>
             <button className="btn btn-primary  " onClick={handleUpClick}>convert UpperCase</button>
             <button className="btn btn-primary mx-4  " onClick={handleLowerClick}>convert lowercase</button>
             <button className="btn btn-primary   mx-4 " onClick={handleClearClick}>clear the text </button>
             <button className="btn btn-primary   " onClick={handleCopyClick}> copy text </button>

            <div className="my-4" >
                <h1>Your text summery </h1>
                <p>{text.split(' ').length} word and {text.length} charecter</p>
                <p>{0.008*text.split(' ').length} minuets to read words</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text :"enter the text above to see the preview"}</p>
            </div>
            
           
            
        </div>
    )
}
