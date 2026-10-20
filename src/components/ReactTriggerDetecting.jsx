import React, { useState } from 'react'

const ReactTriggerDetecting = () => {
    const [count,setCount]=useState(0);
    console.log("Counter Rendered")
  return (
    <div>
        <h2>React Trigger Detecting</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default ReactTriggerDetecting