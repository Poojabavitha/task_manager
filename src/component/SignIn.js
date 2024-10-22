import React from "react";
import { useState } from "react";
import '../App.css'

function SignIn ({signIn}){
  const [data,setData] = useState(()=>{});

  function handleInputChange({target:{name,value}}){
setData({...data,[name]:value})
  }

  function submitform(){
    signIn(data.username, data.password, data.phoneNumber)
  }    
  return(
        <div className="form">
      <input onChange={handleInputChange} type="email" name="username" placeholder="Enter your email" /> <br/>
      <input onChange={handleInputChange} type="password" name="password" placeholder="Enter password"/><br/> 
      <button onClick={submitform}>login</button>
      </div>
    )
}

export default SignIn;