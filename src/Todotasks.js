import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import {ref,onValue} from 'firebase/database'


function Todotasks({uid}){

    const [todos, setTodos] = useState([]);

useEffect(()=>{
     const todo_ref = ref(database,'todo/');

     onValue(todo_ref,snapshot=>{
       const data =snapshot.val();
       let todos =[];

       for (let key in data){
         let val=data[key];
        todos.push({
            ...val,
            todo_id:key
        })
       }
        setTodos(todos);
        
       
     });

},[uid]);

    return(
<div style={{width:'50%',maxwidth: '300px' }}>
    {
        todos.length>0 ? (
            todos.map(todo=>(
                  <details key={todo.todo_id}>
                     <summary>{todo.title}</summary>  
                     <p>{todo.description}</p>  
                  </details>
            )) ): (
                <p>Empty bucket</p>
            )
        
    }
</div>
    )
}


export default Todotasks;