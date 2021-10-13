// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  //adding lending system
  apiKey: "AIzaSyC8KFWOOCTpbtjDzaVXYX1rOyA2bA0IiGI",
  authDomain: "lending-b64d6.firebaseapp.com",
  databaseURL: "https://lending-b64d6-default-rtdb.firebaseio.com",
  projectId: "lending-b64d6",
  storageBucket: "lending-b64d6.appspot.com",
  messagingSenderId: "180777795271",
  appId: "1:180777795271:web:b3a107b7579b6bfb67c8e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore()