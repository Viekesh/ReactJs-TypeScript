import { initializeApp } from "firebase/app";

// This "getAuth" is gives us many many information about the user which is we want to authenticate
import { getAuth } from "firebase/auth";

// This is for database
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBhQZGh7E17e1ICMUhYRLcNn5uZ4cnr2fo",
    authDomain: "portfolio-c9e55.firebaseapp.com",
    projectId: "portfolio-c9e55",
    storageBucket: "portfolio-c9e55.appspot.com",
    messagingSenderId: "1097639505177",
    appId: "1:1097639505177:web:ad504ad76c2130baafe988",
    measurementId: "G-B8ZN5FGP49"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);



export { auth, database, storage };
