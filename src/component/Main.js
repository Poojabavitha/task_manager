import { signOut } from "firebase/auth";
import React from "react";
import TodoInput from "../TodoInput";
import Todotasks from "../Todotasks";
import './Main.css'


function Main({email,signOut}){
    return(
        <div style={{padding:'20px'}} >
            <h3>Hi {email}, Have a Great Day!...</h3>
            <button onClick={signOut}>signOut</button><hr/>
            <div className="todo_container">
                <TodoInput/>
                <Todotasks/>
                </div>
        </div>
    )
}


export default Main;