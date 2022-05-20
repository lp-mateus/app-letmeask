// React Hooks
// import { useState } from 'react';

// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQgPog4B405nWWea6rRSXYzQRv5RhCjd4",
  authDomain: "mlp-backend-letmeask.firebaseapp.com",
  projectId: "mlp-backend-letmeask",
  storageBucket: "mlp-backend-letmeask.appspot.com",
  messagingSenderId: "265212235933",
  appId: "1:265212235933:web:06a5f174ca45beebb00474",
  measurementId: "G-V9QV00WDP9"

};

// Métodos necessários Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Metodo de Login do Usuario com Google
export function loginGoogle(){

  // Método de popup
  signInWithPopup(auth, provider)
      .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          console.log("SUCESSO: " + result);

          // Mapeando usuario dados do login usuario
          const usuario = {
            id: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
            phone: result.user.phoneNumber,
          }
          
          // Armazenando localstorage
          localStorage.setItem("id", usuario.id);
          localStorage.setItem("name", usuario.name);
          localStorage.setItem("email", usuario.email);
          localStorage.setItem("phone", usuario.phone);

          // Redirecionar usuario
          window.location.replace("/ask");

      }).catch((error) => {
          // Handle Errors here.
          console.log(error);
          alert("Failed Login ... Try again with a Google Account!" + error);
      });

}
