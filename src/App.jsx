import React from 'react'
import MyfirstComponent from './components/MyfirstComponent'
import Card from './components/Card'
import OrderStatus from './components/OrderStatus'
// function Greeting({isLoggedIn}){
//    if(isLoggedIn){
//     return(
//       <div>
//         <h1>Welcome Back,How are you ??</h1>
//       </div>
//     )
//    }else{
//     return(
//       <div>
//         <input placeholder='Enter Your Mail'/>
//         <input placeholder='Enter Your Password'/>
//         <button>Login</button>
//       </div>
//     )
//    }
// }

const App = () => {
  const hasNotification=false;
  return (
      <div>
        <MyfirstComponent/>
        <OrderStatus status="pending"/> <br />
        <OrderStatus status="approved"/> <br />
        <OrderStatus status="rejected"/> <br />
        {/* <Greeting isLoggedIn={false}/> */}
        {/* And operator  */}
        {
        hasNotification && (
          <p>You have a new Notification !! </p>
        )
        }
      </div>
  )

}
export default App
