import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBQAYEvKU_85Xrj_1HFiazdc4G5x7Pa8vs",
  authDomain: "fullautomatewebsolution.firebaseapp.com",
  projectId: "fullautomatewebsolution",
  storageBucket: "fullautomatewebsolution.firebasestorage.app",
  messagingSenderId: "544476675765",
  appId: "1:544476675765:web:402af9e09b228b563d88fc",
  measurementId: "G-PJ0HKP092Y"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);