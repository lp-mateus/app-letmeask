import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyCQgPog4B405nWWea6rRSXYzQRv5RhCjd4",
  authDomain: "mlp-backend-letmeask.firebaseapp.com",
  projectId: "mlp-backend-letmeask",
  storageBucket: "mlp-backend-letmeask.appspot.com",
  messagingSenderId: "265212235933",
  appId: "1:265212235933:web:06a5f174ca45beebb00474",
  measurementId: "G-V9QV00WDP9"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;