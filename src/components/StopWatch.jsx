import React, { useEffect, useState,useRef} from 'react'

const StopWatch = () => {
    const [seconds,setSeconds]=useState(0);
    const timeRef=useRef(null);
    function start(){
        console.log("Timer Started for Stop Watch")
        if(timeRef.current !== null) return;
        timeRef.current=setInterval(()=>{
            setSeconds(s=>s+1);
        },1000)
    }
    function stop(){
        console.log("Timer Stoped for stop watch")
        clearInterval(timeRef.current);
        timeRef.current=null;
    }
    function reset(){
        console.log("Timer Reset")
        stop();
        setSeconds(0);
    }
    useEffect(()=>{
        return ()=>{
            console.log("Cleanup Executed !!");
            clearInterval(timeRef.current);
        };
    },[]);
  return (
    <div>
        <h2>Time :{seconds}s</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default StopWatch