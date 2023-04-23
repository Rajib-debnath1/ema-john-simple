// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIZZf_lrjJCgrjcXjnZ96QTymV8N8lO0Y",
  authDomain: "ama-john-with-firebase-a-6fcc6.firebaseapp.com",
  projectId: "ama-john-with-firebase-a-6fcc6",
  storageBucket: "ama-john-with-firebase-a-6fcc6.appspot.com",
  messagingSenderId: "689749015988",
  appId: "1:689749015988:web:3e39a230efb92dc3b1c6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;