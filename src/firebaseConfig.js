// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDolEOMOig0lflPCMGRpoGIuY54XbewOIE",
    authDomain: "reactjs-typescript-14ea3.firebaseapp.com",
    projectId: "reactjs-typescript-14ea3",
    storageBucket: "reactjs-typescript-14ea3.appspot.com",
    messagingSenderId: "900709374309",
    appId: "1:900709374309:web:875bd8d453f89c14bba98c",
    measurementId: "G-9X3H00EGEL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);

export {auth, database, storage};