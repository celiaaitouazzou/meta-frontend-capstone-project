import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "",

  authDomain: "little-lemon-reservation-400f0.firebaseapp.com",

  projectId: "little-lemon-reservation-400f0",

  storageBucket: "little-lemon-reservation-400f0.firebasestorage.app",

  messagingSenderId: "993698340944",

  appId: "1:993698340944:web:5df86825cc1ed6f634b155",

  measurementId: "G-Z3GQRSM6KR"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };