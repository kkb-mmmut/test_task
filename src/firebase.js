import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
const firebaseConfig = {

    apiKey: "AIzaSyCe9mUC0w5gfCd6R5KA0Ah41RtSTYm0xKw",
  
    authDomain: "users-reg.firebaseapp.com",
  
    projectId: "users-reg",
  
    storageBucket: "users-reg.appspot.com",
  
    messagingSenderId: "5462421455",
  
    appId: "1:5462421455:web:af7a837fb98956b1c7acba"
  
  };
  
  
firebase.initializeApp(firebaseConfig); 
export const firestore = firebase.firestore();