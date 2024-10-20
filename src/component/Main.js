// import { signOut } from "firebase/auth";
import React ,{useState} from "react";
import TodoInput from "../TodoInput";
import Todotasks from "../Todotasks";
import './Main.css';


function greetingofTheDay(){

    let date=new Date();

let ms_time = date.getTime();

let sms =1000;
let mms=60*sms;
let hms=60*mms;
let dayms =24*hms;

let current_hour_time_ms= Math.floor(ms_time%dayms);

let afternoon_start=12*60*60*1000;
let evening_start=16*60*60*1000;
let night_start=20*60*60*1000;

if(current_hour_time_ms<12){
 return 'Good Morning...';
}

else if(current_hour_time_ms>=afternoon_start && current_hour_time_ms<evening_start){
    return 'Good Afternoon...';
}
else if(current_hour_time_ms>=evening_start && current_hour_time_ms<night_start){
    return 'Good Evening...';
}
else if(current_hour_time_ms>=night_start){
    return 'Good Night...';
}
else{
    return 'Have a great day!...';
}

}


function Main({user,signOut}){

    const [edit_id,setEditId]=useState(()=>null);

    function editTodo(todo_id){
        setEditId(todo_id);
    }

    

    return(
        <div style={{padding:'20px'}} >
            <h4>Hi {user?.email},{greetingofTheDay()}</h4>
            <button onClick={signOut}>signOut</button><hr/>
            <div className="todo_container">
                
                <TodoInput edit_id={edit_id}/>
                <Todotasks uid={user?.uid}/>
                </div>
        </div>
    )
}


export default Main;