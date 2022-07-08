import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe4ZNI_Sq1Gq9yytIQfEhXh_aphcZot9M",
  authDomain: "patel-school-karera.firebaseapp.com",
  projectId: "patel-school-karera",
  storageBucket: "patel-school-karera.appspot.com",
  messagingSenderId: "1084716353680",
  appId: "1:1084716353680:web:ea0e9e85f45a7201903015",
  measurementId: "G-RKCD107XJ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
