// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQbTRcXr9ZNL5i-3Dx_JraeJgTg-VkjyU",
  authDomain: "quicknotes-bd1cd.firebaseapp.com",
  projectId: "quicknotes-bd1cd",
  storageBucket: "quicknotes-bd1cd.firebasestorage.app",
  messagingSenderId: "297106485570",
  appId: "1:297106485570:web:69ce53baf9eea4660198db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;