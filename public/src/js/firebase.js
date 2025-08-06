import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,  
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBx1QuNoiBLz5-75WhbGx63mqcqi8KARFk",
  authDomain: "crypto-view-2025.firebaseapp.com",
  projectId: "crypto-view-2025",
  storageBucket: "crypto-view-2025.firebasestorage.app",
  messagingSenderId: "485757589453",
  appId: "1:485757589453:web:187ba8844826e2ed5e1684",
  measurementId: "G-6HXEPM7RF1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged };
