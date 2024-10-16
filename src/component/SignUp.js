import React, { useState } from "react";
import {Link} from "react-router-dom";
// import { useState } from "react";
// import SignIn from "./SignIn";

function SignUp(signUp){

const [data,setData] = useState(()=>{});

  function handleInputChange({target:{name,value}}){
setData({...data,[name]:value})
  }

  function submitform(){
    signUp(data.username, data.emailaddress, data.Password)
  }
    return(
        <div>
      <input onChange={handleInputChange} type="text" name="username" placeholder="Enter username"></input> 
      <input onChange={handleInputChange} type="email" name="emailaddress" placeholder="Enter your email"></input> 
      <input onChange={handleInputChange} type="password" name="password" placeholder="Enter password"></input> 
      <button onClick={submitform}>Register</button>
      </div>
    )
}

export default SignUp;


