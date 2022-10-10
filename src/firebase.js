// import * as firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPeYnY4DDsxdH14bPuzg0RS6gWIpxoMPY",
  authDomain: "ecommerce-9c8b7.firebaseapp.com",
  projectId: "ecommerce-9c8b7",
  storageBucket: "ecommerce-9c8b7.appspot.com",
  messagingSenderId: "976549316151",
  appId: "1:976549316151:web:48152037b415f4fc95e1b2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
