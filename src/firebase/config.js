// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
// export const storage = getStorage(app);
// const projectStorage = app.storage();
// const projectFirestore = app.firestore();
// const timestamp = app.firestore.FieldValue.serverTimestamp;

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp(); // Use serverTimestamp directly
export { projectStorage, projectFirestore, timestamp };
