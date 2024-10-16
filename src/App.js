import React from 'react';
import './App.css';
import {firebase_app} from './firebase.js';
import {getAuth,
  // signInWithEmailAndPassword,
  // signOut,
  // onAuthStateChanged, 
createUserWithEmailAndPassword,
updateProfile} from 'firebase/auth';

  import SignIn from './component/SignIn.js';
  import SignUp from './component/SignUp.js';
  import { useState } from 'react';
  import Main from './component/Main.js';

function App() {

  const auth=getAuth(firebase_app);

  const [component, switchComponent] = useState(()=>'signin');
  const [user,setUser]=useState(()=>({active:false, user:null}))

  function toogleAuthComp(){
    switchComponent(prev=>prev==='signin'? 'signup': 'signin')
  }

  function signIn(username,Password){

  }
  async function signUp(username,emailaddress,password,displayName){

try {
  const credential = await createUserWithEmailAndPassword(auth,username,password);
  await updateProfile(auth.currentUser,{
emailaddress,
displayName
  });

alert(`Account created for ${credential.user.email}`);
setUser({active:true,user:credential.user});

} catch (error) {
   console.error(error.message);
     
}
 }

 async function signOut() {
  await signOut();
  setUser({active:false,user:null});
 }

 if(user.active){
return(
  <Main email={user.user.email} signOut={signOut}/>
)
 }
  return (
  <>
  <div>
    <button onClick={toogleAuthComp}>SignIn</button>
    <button onClick={toogleAuthComp}>SignUp</button>
  </div><hr/>
    {
      component==='signin'?(<SignIn signIn={signIn}/>) : (<SignUp signUp={signUp}/>)
    }
    </>
  );
}

export default App;
