import React, { useEffect, useState } from 'react'

const UseEffectUnderstandingOrder = () => {
  const[count,setCount]=useState(0);
  console.log("1.Triggering");
  useEffect(()=>{
    console.log("Useeffect run kr rha h ");
    document.title=`Count:${count}`;
  },[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      Count:{count}
    </div>
  )
}

export default UseEffectUnderstandingOrder