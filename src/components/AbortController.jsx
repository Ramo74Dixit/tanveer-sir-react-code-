import React, { useEffect, useState } from 'react'

const FileForAbortCode = ({username}) => {
    const [user,setUser]=useState(null);
    const [error,setError]=useState("");
    useEffect(()=>{
        if(!username){
            setUser(null);
            return;
        }
        const controller=new AbortController();
        async function getUser(){
            try{
                   setUser(null);
                   setError("");
                   const response=await fetch(`https://api.github.com/users/${username}`,{signal:controller.signal})

                   if(!response.ok){
                    throw new Error("User Not Found")
                   }

                   const data=await response.json();
                   if(!controller.signal.aborted){
                    setUser(data);
                   }
            }catch(err){
                if(err.name !== "AbortError"){
                    setError(err.mesage);
                }
            }
        }
        getUser();
        return ()=>controller.abort();
    },[username]);
  return (
    <div>
        {error && <p>{error}</p>}
        {user && <img src={user.avatar_url}/>}
    </div>
  )
}

export default FileForAbortCode