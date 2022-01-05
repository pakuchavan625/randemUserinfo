import React, { useState } from 'react'
import "../styles/reactform.css"

function ReactFormvalidation() {
    const [values,setValues]= useState({
        FirstName:"",
        Lastname:"",
        Email:""
    })
    const [submitted,setSubmitted]=useState(false)
    const [valid ,setValid]=useState(false)

    const handlefirstname=(e)=>{
        setValues({...values,FirstName:e.target.value})
    }
    const handleLastname=(e)=>{
        setValues({...values,Lastname:e.target.value})
    }
    const handleEmail=(e)=>{
        setValues({...values,Email:e.target.value})
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        if(values.FirstName && values.Lastname && values.Email){
            setValid(true)
            
        }
        setSubmitted(true)
    }
    return (
        <div>
            <div className="container  wrapper">
              <div className="formcontainer">
                <form action=""  className="form-wrapper" onSubmit={handlesubmit}>
                    {submitted && valid ?  <div className="success-message">Success!Thank you for Registration</div> : null}
                    
                    <input onChange={handlefirstname} value={values.FirstName}  type="text" className="form-control mb-3 " placeholder='FirstName' />
                    {submitted && !values.FirstName ? <span>Please enter FirstName</span> : null}
                    <input onChange={handleLastname}value={values.Lastname} type="text" className="form-control mb-3 " placeholder='Lastname' />
                    {submitted && !values.Lastname ? <span>Please enter LastName</span> : null}
                    <input  onChange={handleEmail} value={values.Email} type="text" className="form-control mb-3 " placeholder='Email' />
                    {submitted && !values.Email ? <span>Please enter Email</span> : null}
                    <div>
                    <button className="btn btn-success " style={{width:"100%"}}>Register</button>
                    </div>
                    
                </form>
                </div>
            </div>
        </div>
    )
}

export default ReactFormvalidation
