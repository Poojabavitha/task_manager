import { signOut } from "firebase/auth";
import React from "react";
import Todo from "../Todo";

function Main({email,signOut}){
    return(
        <div style={{padding:'20px'}}>
            <h3>Hi {email}, Have a Great Day!...</h3>
            <button onClick={signOut}>signOut</button><hr/>
            <Todo/>
        </div>
    )
}


export default Main;