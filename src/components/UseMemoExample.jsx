import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [count,setCount]=useState(0);
    const [dark,setDark]=useState(false);
    const result=useMemo(()=>{
         console.log("Calculating");
        let total=0;
        for(let i=0;i<100000;i++){
            total+=i;
        }
        return total;
    },[]);
  return (
    <div>
       <h2>Result:{result}</h2>
       <button onClick={()=>setCount(c=>c+1)}>Count:{count}</button>
       <button onClick={()=>setDark(d=>!d)}>Toggle Theme :{dark?"Dark":"Light"}</button>
    </div>
  )
}

export default UseMemoExample