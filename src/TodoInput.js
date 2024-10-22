    import React, { useState ,useEffect} from "react";
import { database, firebase_app } from "./firebase";
import {set, ref, update} from 'firebase/database';
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

function TodoInput({edit_todo, setEditTodo}){
    
        const [data,setData]=useState(()=>({complete:false,title: '', description: '',  stuff_on: '' }));

       const [user,setUser]= useState({active:false, user:null});

       

       const auth = getAuth(firebase_app);


       // to fetch added tasks

       
    useEffect(()=>{ 
        onAuthStateChanged(auth,function(user){
            if(user)
            
            setUser({active:true,user})
          }, error=>{
            alert('Something went wrong');
            console.error(error);
            
          });
    },[auth]);


    //to edit todo

    
    useEffect(() => {
      if (edit_todo !== null) {
        // Using a functional update to ensure we don’t depend on stale `data`
        setData(prevData => ({
          ...prevData,
          title: edit_todo?.title || '',
          description: edit_todo?.description || '',
          stuff_on: edit_todo?.stuff_on || ''
        }));
      }
    }, [edit_todo]); 
       
    function handleInputChange({ target: { name, value } }) {
      setData(prevData => ({ ...prevData, [name]: value }));
    }

        // function handleInputChange({target : {name,value}}){
        //     setData({...data,[name]:value})
        // }

        async function addStuff() {
            try {
                const created_ref = ref (database,'todo/'+generateUniqueID(50));
                // const created_ref = ref(database, 'todo/' + new Date().getTime()); // Unique timestamp-based ID

              await set(created_ref, {...data,uid:user.user?.uid});
              alert('Task added...');

              setData({title:'',description:'',stuff_on:''});
            } 
            catch (error) {
                alert('Something went wrong...')
                console.error(error.message);
                
            }
        }
        async function editStuff(edit_todo) {
            const todo_ref=ref(database,`todo/${edit_todo.todo_id}`);
      await update(todo_ref,{
        ...edit_todo,
        ...data
      });
      setData({title:'',description:'',stuff_on:''});
      setEditTodo(null);
      alert('Task Updated');
    }
        
        return(
<div style={{width: '50%', maxWidth :'300px'}}>
    <h2>Todo Application</h2>
    <div>
        <p>Todo title</p>
        <input onChange={handleInputChange} type="text" name="title" 
        placeholder="Enter title"  value={data.title}/> <br/>
        <p>Todo description</p>
        <textarea onChange={handleInputChange} name="description"
         placeholder="Enter description" value={data.description}/> <br/>
        <p>Task perform date</p>
        <input onChange={handleInputChange} type="date" name="stuff_on" 
        placeholder="Stuff perform on" value={data.stuff_on}/> <br/><br/>
        {
            edit_todo===null?(<button onClick={addStuff}>addStuff</button>):(
                <button onClick={()=>editStuff(edit_todo)}>Edit Stuff</button>
            )
        }
    </div>
</div>
    );
}

export default TodoInput;