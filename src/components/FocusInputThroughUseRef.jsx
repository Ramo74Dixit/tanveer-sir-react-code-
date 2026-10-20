import React,{useRef,useState} from 'react'

const FocusInputThroughUseRef = () => {
    const inputRef=useRef(null);
    const [input,setInput]=useState("");
   
    function handleFocus(){
         console.log("Component Re render hua")
        inputRef.current.focus();
    }
    function handleInputChange(e){
        setInput(e.target.value);
    }
  return (
    <div>
      <input onChange={handleInputChange} ref={inputRef} placeholder='Enter Your name'/>
      <button onClick={handleFocus}>Focus Input </button>
    </div>
  )
}

export default FocusInputThroughUseRef