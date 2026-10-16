import React from 'react'

const EventPropgationExample = () => {
    function handleParentClick(){
        alert("ParentClicked")
    }
    function handleChildClick(event){
        // event.stopPropagation();
        alert("Child Clicked");
    }
  return (
    <div onClick={handleParentClick} style={{padding:"40px",backgroundColor:"lightblue"}}>
           <h2>Parent Container</h2>
           <button onClick={handleChildClick}>Child Button</button>
    </div>
  )
}

export default EventPropgationExample