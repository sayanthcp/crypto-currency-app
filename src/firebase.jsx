// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDl1Usr8sASMpW8zUEnqzowz94KQeTPeiw",
  
    authDomain: "crypto-bf7e3.firebaseapp.com",
  
    projectId: "crypto-bf7e3",
  
    storageBucket: "crypto-bf7e3.appspot.com",
  
    messagingSenderId: "986113900057",
  
    appId: "1:986113900057:web:39728736713f6720097488"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app