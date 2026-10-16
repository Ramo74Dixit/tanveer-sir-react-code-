import React, { useState } from 'react'

const HideshowPassword = () => {
    const [showPassword,setShowPassword]=useState(false);
    function togglePassword(){
        setShowPassword(!showPassword)
    }
  return (
    <div>
        <h2>Password Visibilty </h2>
        <input type={showPassword ? "text" : "password"} placeholder='Enter Your Password'/>
        <button onClick={togglePassword}>{showPassword?"Hide":"Show"} Password</button>
    </div>
  )
}

export default HideshowPassword


