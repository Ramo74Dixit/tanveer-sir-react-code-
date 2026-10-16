import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("Ram");
  const [student,setStudent]=useState({name:"Aman",age:21})
  function handlClick(){
    setCount(x=>x+1);
    setCount(x=>x+1);
    setCount(x=>x+1);
    console.log(count);
  }
  function handleNameChange(){
    setName("Rahul");
    console.log(name);
  }
  function handleAgeChange(){
     setStudent(prev=>({
      ...prev,age:22
     }))
  }
  return (
    <div>
        <h1>Counter Application</h1>
        <p>{student.age}</p>
        <p>Count:{count}</p>
        <button onClick={handlClick}>Increase</button>
        <button onClick={handlClick}>Decrease</button>
        <button onClick={handlClick}>Reset</button>
        <button onClick={handleNameChange}>HandleNameChange</button>
        <button onClick={handleAgeChange}>HandleAgeChange</button>
    </div>
  )
}

export default Counter