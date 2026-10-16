import React, { useState } from 'react'

const ForminReact = () => {
    const [name,setName]=useState("")
    const [message,setMessage]=useState("")
    function handleChange(event){
        setName(event.target.value);
    }
    function handleClick(){
        setMessage("Button is clicked");
    }
    function handleMouseEnter(){
        setMessage("Mouse Enter the button")
    }
  return (
    <div>
        <h2>React Events </h2>
        <input type="text" value={name} onChange={handleChange} />
        <p>Hello,{name}</p>
        <button onClick={handleClick} onMouseEnter={handleMouseEnter}>Interact with me</button>
        <p>Mesage:{message}</p>
    </div>
  )
}

export default ForminReact