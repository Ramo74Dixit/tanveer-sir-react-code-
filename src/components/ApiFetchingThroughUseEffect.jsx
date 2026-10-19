import React, { useEffect, useState } from 'react'

const ApiFetchingThroughUseEffect = () => {
    const [users,setUsers]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");
    useEffect(()=>{
         async function fetchUsers() {
            try{
               setLoading(true);
               setError("");
               const response= await fetch("https://jsonplaceholder.typicode.com/posts");

               if(!response.ok){
                throw new Error("Failed to fetch Users");
               }
               const data= await response.json();
               setUsers(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
         }
         fetchUsers();
    },[])
   if(loading){
    return <h2>Loading Users...</h2>
   }
   if(error){
    return <h2>Error :{error}</h2>
   }
   return (
     <div>
        {users.map(user=>(
            <div style={{backgroundColor:"gray",margin:"10px"}}>
                 <h3 key={user.id}>{user.title}</h3>
                 <p>{user.body}</p>
            </div>
        ))}
     </div>
   )
}

export default ApiFetchingThroughUseEffect