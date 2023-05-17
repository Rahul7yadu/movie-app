// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env.apiKey)
const firebaseConfig = {
  apiKey: process.env.API_KEY2 || "AIzaSyDYhohd3MxKt3azPuqfRxt9Yjck4sjOSkQ",
  authDomain: process.env.AUTH_DOMAIN || "movies-app-d97d0.firebaseapp.com",
  projectId: process.env.PROJECT_ID||"movies-app-d97d0",
  storageBucket: process.env.STORAGE_BUCKET||"movies-app-d97d0.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID||"274051436065",
  appId: process.env.APP_ID||"1:274051436065:web:c5f29d496431a76c275d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export default app