import React, { useState } from 'react'
// Component 1 (child)
function Child({count}){
    console.log("CHild rendered");
    return <h2>Child Component Function:{count} </h2>
}
// Component 2 (Parent)
const ParentReRendering = () => {
    const [count,setCount]=useState(0);
    console.log("Parent Rendered !!")
  return (
    <div>
        <h1>Parent Count :{count}</h1>
        <Child count={count}/>
         <button onClick={()=>setCount(count+1)}>Increase</button>
        
    </div>
  )
}

export default ParentReRendering