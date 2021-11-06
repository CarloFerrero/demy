// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCApNB4LAgEhWex5p1JCJZ52ypjgvoRtMA",
  authDomain: "demy-9c1f7.firebaseapp.com",
  projectId: "demy-9c1f7",
  storageBucket: "demy-9c1f7.appspot.com",
  messagingSenderId: "397077058094",
  appId: "1:397077058094:web:1d7065f84857ec7aba45bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();

export { storage, db as default };

//export default getFirestore();
