import React, { useState } from 'react'
import FileForAbortCode from './AbortController';
const SearchBar = () => {
    const [input,setInput]=useState("");
    const [username,setUsername]=useState("");
    function handleSearch(){
        setUsername(input.trim());
    }
  return (
    <div>
        <h1>Github USer Profile Search</h1>
        <input type='text' placeholder='Enter your github username' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
        <FileForAbortCode username={username}/>
    </div>
  )
}

export default SearchBar