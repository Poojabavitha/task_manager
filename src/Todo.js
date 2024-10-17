import React, { useState } from "react";

function Todo(){
    
        const [data,setData]=useState(()=>{});
        function handleInputChange({target : {name,value}}){
            setData({...data,[name]:value})
        }

        async function addStuff() {
            
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