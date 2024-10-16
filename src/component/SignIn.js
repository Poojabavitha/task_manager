import React from "react";
import { useState } from "react";

function SignIn ({signIn}){
  const [data,setData] = useState(()=>{});

  function handleInputChange({target:{Name,value}}){
setData({...data,[Name]:value})
  }

  function submitform(){
    signIn(data.Emailaddress, data.Password)
  }
    return(
        <div class="form">
        <input onChange={handleInputChange} type="text" name="username" placeholder="Enter username"></input> 
      <input onChange={handleInputChange} type="email" name="emailaddress" placeholder="Enter your email"></input> 
      <input onChange={handleInputChange} type="password" name="password" placeholder="Enter password"></input> 
      <button onClick={submitform}>Register</button>
      </div>
    )
}

export default SignIn;