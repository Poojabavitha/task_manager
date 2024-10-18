import React, { useState } from "react";
import { database } from "./firebase";
import {set, ref} from 'firebase/database'


function generateUniqueID(num){
 let chars='abcdefghijklmnopqrstuvwxyz1234';
 let str='';
 for (let i=0; i<chars.length; i++)
 {
 let index =Math.floor(Math.random()*chars.length);
 str+=chars[index];
 }

 return str;
}

function Todo(){
    
        const [data,setData]=useState(()=>{complete});
        function handleInputChange({target : {name,value}}){
            setData({...data,[name]:value})
        }

        async function addStuff() {
            try {
                const created_ref = ref (database,'todo/'+generateUniqueID(10));
              await set(created_ref, {...data});
              alert('Task added...');
            } catch (error) {
                alert('Something went wrong...')
                console.error(error.message);
                
            }


        }
        return(
<div>
    <h2>Todo Application</h2>
    <div>
        <p>Todo title</p>
        <input onChange={handleInputChange} type="text" name="title" placeholder="Enter title" /> <br/>
        <p>Todo description</p>
        <textarea onChange={handleInputChange} name="description" placeholder="Enter description" /> <br/>
        <p>Task perform date</p>
        <input onChange={handleInputChange} type="date" name="stuff_on" /> <br/><br/>
        <button onClick={addStuff}>addStuff</button>
    </div>
</div>
    )
}

export default Todo;