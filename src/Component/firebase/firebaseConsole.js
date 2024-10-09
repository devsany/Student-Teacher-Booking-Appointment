// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbmmoKlOtM-R7P1O5s0kemGNq381T_gyg",
  authDomain: "student-teacher-appoinme-eb8af.firebaseapp.com",
  databaseURL:
    "https://student-teacher-appoinme-eb8af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "student-teacher-appoinme-eb8af",
  storageBucket: "student-teacher-appoinme-eb8af.appspot.com",
  messagingSenderId: "23903352635",
  appId: "1:23903352635:web:b77711de952c1ceba4a91e",
  measurementId: "G-VJMKNE10Y3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
