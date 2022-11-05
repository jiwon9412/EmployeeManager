// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseUrl: process.env.REACT_APP_FIREBASE_DB_URL,
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
