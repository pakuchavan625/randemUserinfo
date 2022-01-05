import React, { useEffect,useLayoutEffect,useRef } from 'react'

function UseLayoutEffectHook() {
    
    const inputRef=useRef(null)
    useEffect(()=>{
console.log("pink love you")
    },[])

    useLayoutEffect(() => {
        inputRef.current.value = "hello pink"
    }, [])

    return (
        <div>
            <div className="container">
                <h2>UseLayoutEffect hook</h2>
                <p>This hooks are used when something firts have to render the useEffect hook
                    this hook is the first element to render
                </p>
                <input ref={inputRef} type="text" value="paku" style={{width:"100%",height:"200px",border:"1px solid red"}} />
            </div>
        </div>
    )
}

export default UseLayoutEffectHook
