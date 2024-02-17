import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ1EalH9MfpJIiZMwAbtrgot9RcGv4DM8",
  authDomain: "blog-react-236ab.firebaseapp.com",
  projectId: "blog-react-236ab",
  storageBucket: "blog-react-236ab.appspot.com",
  messagingSenderId: "1055637539909",
  appId: "1:1055637539909:web:bc08a8a456f8df81c1272c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db=getFirestore(app);

export {auth,provider,db};