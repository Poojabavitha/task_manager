import React, { useEffect } from 'react';
import './App.css';
import {firebase_app} from './firebase.js';
import {getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
createUserWithEmailAndPassword,
updateProfile} from 'firebase/auth';

  import SignIn from './component/SignIn.js';
  import SignUp from './component/SignUp.js';
  import { useState } from 'react';
  import Main from './component/Main.js';

function App() {

  const auth=getAuth(firebase_app);

  const [component, switchComponent] = useState(()=>'signin');
  const [user,setUser]=useState(()=>({active:false, user:null}));

  useEffect(()=>{
onAuthStateChanged(auth,function(user){
  
  
  if(user)
  
  setUser({active:true,user})
}, error=>{
  alert('Something went wrong');
  console.error(error);
  
});
  },[]);

  

  async function signIn(username,password){
    try {
      if (!username || !password) {
        throw new Error("Both username and password are required.");
    }
      const credential = await signInWithEmailAndPassword(auth,username,password);
      setUser({active:true,user:credential.user});
    
    } catch (error) {
       console.error(error.message);
       if (error.code === 'auth/invalid-email') {
        console.error('Invalid email address format.');
    } else if (error.code === 'auth/user-not-found') {
        console.error('No user found with this email address.');
    } else if (error.code === 'auth/wrong-password') {
        console.error('Incorrect password.');
    }
         
}
  }
  async function signUp(username,password, phonenumber,displayName){

try {
  const credential = await createUserWithEmailAndPassword(auth,username,password);
  await updateProfile(auth.currentUser,{
    phonenumber,
displayName
  });

alert(`Account created for ${credential.user.email}`);
setUser({active:true,user:credential.user});

} catch (error) {
   console.error(error.message);
     
}
 }

 async function logOut() {
  await signOut(auth);
  setUser({active:false,user:null});
 }

 if(user.active===true){
return(
  <Main email={user} signOut={logOut}/>
)
 }
  return (
  <>
  <div>
  <button onClick={()=>switchComponent('signin')}>SignIn</button>&nbsp;
  <button onClick={()=>switchComponent('signup')}>SignUp</button>
  </div><hr/>
    {
      component==='signin'?(<SignIn signIn={signIn}/>) : (<SignUp signUp={signUp}/>)
    }
    </>
  );
}

export default App;
