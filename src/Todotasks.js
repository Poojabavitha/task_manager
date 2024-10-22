import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import {ref,onValue, remove} from 'firebase/database';
import { FaTrash, FaPen} from 'react-icons/fa';


function Todotasks({uid, editTodo}){

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
            todo_id: key
        });
       }
       todos=todos.filter(todo=>todo.uid===uid);
       console.log(todos);
        setTodos(todos);
        
       });

},[uid]);

function deleteStuff(id){
    const todo_ref=ref(database,'todo/'+id);
    remove(todo_ref);
    
    let filter_todos=todos.filter(todo=>todo.todo_id!==id);
    setTodos(filter_todos);
}
        


    return(
<div style={{width:'50%',maxWidth: '300px'}}>
    {
        todos.length>0 ? (
            todos.map(todo=>(
                  <details key={todo.todo_id} style={{margin:'15px 10px'}}>
                    <span style={{fontsize:'0.9'}}><i>Start on {todo.stuff_on} </i></span>
                     <summary>{todo.title}</summary>  
                     <p>{todo.description}</p>  
                     <div>
                        <button onClick={()=> deleteStuff(todo.todo_id)}><FaTrash/>Delete</button>
                        <button value={todo.todo_id} onClick={()=>editTodo({...todo})}><FaPen/>Edit</button>
                     </div>
                     
                  </details>
            )) ): (
                <p>Empty bucket</p>
            )
        
    }
</div>
    )
}


export default Todotasks;