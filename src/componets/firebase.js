
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCwVvuEgymi_3c3fiRO3zgdSBpWJ8ACx9o",
  authDomain: "coderhousereact-6d145.firebaseapp.com",
  projectId: "coderhousereact-6d145",
  storageBucket: "coderhousereact-6d145.appspot.com",
  messagingSenderId: "721426451039",
  appId: "1:721426451039:web:72ac0941c563208b7669ea",
  measurementId: "G-MYMMLXMCQX"
}

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app

