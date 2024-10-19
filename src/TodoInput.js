import React, { useState ,useEffect} from "react";
import { database, firebase_app } from "./firebase";
import {set, ref} from 'firebase/database';
import { getAuth, onAuthStateChanged } from "firebase/auth";


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

function TodoInput(){
    
        const [data,setData]=useState(()=>({complete:false}));

       const [user,setUser]= useState({active:false, user:null});

       const auth = getAuth(firebase_app);

    useEffect(()=>{
        onAuthStateChanged(auth,function(user){
            if(user)
            
            setUser({active:true,user})
          }, error=>{
            alert('Something went wrong');
            console.error(error);
            
          });
    },[]);

        function handleInputChange({target : {name,value}}){
            setData({...data,[name]:value})
        }

        async function addStuff() {
            try {
                const created_ref = ref (database,'todo/'+generateUniqueID(10));
              await set(created_ref, {...data,uid:user.user?.uid});
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

export default TodoInput;