import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBkgsQGvldGnKRtotT5mIEiOtNzA0MKsgY",
  authDomain: "kahveborsasi-7aa8e.firebaseapp.com",
  projectId: "kahveborsasi-7aa8e",
  storageBucket: "kahveborsasi-7aa8e.appspot.com",
  messagingSenderId: "503255786197",
  appId: "1:503255786197:web:3dfab72ffe5366f47b385c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}