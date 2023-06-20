import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAwTVZ71fpWMKLbnip6YVtuAoTYX0JFcrs",
  authDomain: "tiktok---jornada-a4e40.firebaseapp.com",
  projectId: "tiktok---jornada-a4e40",
  storageBucket: "tiktok---jornada-a4e40.appspot.com",
  messagingSenderId: "125607620828",
  appId: "1:125607620828:web:fb292d874b3fcc959c0419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;