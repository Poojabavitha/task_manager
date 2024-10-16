import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs2LMzJ98U2qrp_9-DACpsvcOTXsiUt6Q",
  authDomain: "task-manager-482d8.firebaseapp.com",
  projectId: "task-manager-482d8",
  storageBucket: "task-manager-482d8.appspot.com",
  messagingSenderId: "611654576630",
  appId: "1:611654576630:web:ccd49825b8e7eef5ab3fd7"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);