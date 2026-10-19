import React, { useEffect, useState } from 'react'

const TimerWithoutCleanup = () => {
    const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
      console.log("Connected")
      const timer=setInterval(()=>{
        setSeconds(prev=>prev+1);
      },1000)
      return ()=>{
        console.log("disconnected");
        clearInterval(timer);
      }
    },[])
  return (
    <div>Seconds:{seconds}</div>
  )
}

export default TimerWithoutCleanup