import { signOut } from "firebase/auth";
import React from "react";

function Main({email}){
    return(
        <div>
            <h3>Hi {email} Have a Great Day!...</h3>
            <button onClick={signOut}>signOut</button>
        </div>
    )
}


export default Main;