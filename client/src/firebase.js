// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-399bb.firebaseapp.com",
  projectId: "mern-estate-399bb",
  storageBucket: "mern-estate-399bb.appspot.com",
  messagingSenderId: "748531850331",
  appId: "1:748531850331:web:25a13b79b1ebf2d52a337e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);





