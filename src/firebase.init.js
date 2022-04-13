// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClNKtU2J7a_VH7MKxwjkH_3e-_0xmaqeo",
    authDomain: "ema-john-simple-81140.firebaseapp.com",
    projectId: "ema-john-simple-81140",
    storageBucket: "ema-john-simple-81140.appspot.com",
    messagingSenderId: "406536752492",
    appId: "1:406536752492:web:43477df3bf79e06da1b749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;