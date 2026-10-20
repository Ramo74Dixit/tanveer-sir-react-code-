import React, {useRef, useState } from 'react'

const UseRefProof = () => {
const [count,setCount]=useState(0);
const countRef=useRef(0);
function updateRef(){
    countRef.current+=1;
    console.log("Ref:",countRef.current);
}
  return (
    <div>
        <h2>State:{count}</h2>
        <h2>Ref:{countRef.current}</h2>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={updateRef}>Increase Through UseRef</button>
    </div>
  )
}

export default UseRefProof