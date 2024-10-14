import React from 'react';
import './App.css';
// import {firebase} from './firebase.js';
// import {getAuth,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged } from 'firebase/auth';
  // import {BrowserRouter, Routes, Route} from 'react-router-dom';
  import SignIn from './component/SignIn.js';
  import SignUp from './component/SignUp.js';
  import { useState } from 'react';

function App() {

  const [component, switchComponent] = useState(()=>'signin');

  function toogleAuthComp(){
    switchComponent(prev=>prev==='signin'? 'signup': 'signin')
  }

  function signIn(){

  }
  function signUp(){
    
  }
  return (
  <>
  <div>
    <button onClick={toogleAuthComp}>SignIn</button>
    <button onClick={toogleAuthComp}>SignUp</button>
  </div>
    {
      component=='signin'?(<SignIn signIn={signIn}/>) : (<SignUp signUp={signUp}/>)
    }
    </>
  );
}

export default App;
