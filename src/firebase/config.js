// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQJhluv6B_mJWDjjfj0EZGmFQtpwBnmw",
  authDomain: "photo-gallery-ab067.firebaseapp.com",
  projectId: "photo-gallery-ab067",
  storageBucket: "photo-gallery-ab067.appspot.com",
  messagingSenderId: "166292765617",
  appId: "1:166292765617:web:69456672ae2a370edc1b90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();
const timestamp = app.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
