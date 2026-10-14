import React from 'react'




const StudentInformation = ({name,website,email,username,showMessage}) => {
  return (
    <div style={{width:"200px",height:"200px", border:"3px solid red",margin:"5px"}}>
      <span>{name}</span> <br />
      <span>{website}</span> <br />
      <span>{email} </span> <br />
      <span>{username}</span>
      <button onClick={showMessage}>Click This button for Invocation</button>
    </div>
  )
}

export default StudentInformation

