import React, { useState } from "react";
import '../App.css';

// import { useState } from "react";
// import SignIn from "./SignIn";

function SignUp({signUp}){

const [data,setData] = useState(()=>{});

  function handleInputChange({target:{name,value}}){
setData({...data,[name]:value})
  }

  function submitform(){
    signUp(data.username,  data.password, data.phone, data.name)
  }
    return(
        <div className="form">
          <input onChange={handleInputChange} type="text" name="name" placeholder="Enter full name"></input><br/> 
      <input onChange={handleInputChange} type="email" name="username" placeholder="Enter your email"></input> <br/>
      <input onChange={handleInputChange} type="text" name="phone" placeholder="Enter phone number"></input><br/> 
      <input onChange={handleInputChange} type="password" name="password" placeholder="Enter password"></input><br/> 
      <button onClick={submitform}>Register</button>
      </div>
    )
}

export default SignUp;


