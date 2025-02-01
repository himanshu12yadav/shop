import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrCt4pdV9UBvuU-NSm2SluUvuk5LQDTK4",
  authDomain: "shoesmaker-7d906.firebaseapp.com",
  projectId: "shoesmaker-7d906",
  storageBucket: "shoesmaker-7d906.firebasestorage.app",
  messagingSenderId: "137880597457",
  appId: "1:137880597457:web:21c24fe91cb335148c66f0",
  measurementId: "G-S6B6536JMJ"
};

const app = initializeApp(firebaseConfig);
console.log(app);
export const auth = getAuth(app);
console.log(auth)


