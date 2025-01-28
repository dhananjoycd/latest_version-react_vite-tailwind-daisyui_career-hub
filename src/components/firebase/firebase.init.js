// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADTlxO2o-lwV-fexLwxl3OBkufMUPzUrg",
  authDomain: "basic-react-2025.firebaseapp.com",
  projectId: "basic-react-2025",
  storageBucket: "basic-react-2025.firebasestorage.app",
  messagingSenderId: "390643376625",
  appId: "1:390643376625:web:854a64a738e9b725f36450",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
