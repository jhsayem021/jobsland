// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtM0qyiSUG4k0m1IYIbAaASBL246MsvQQ",
  authDomain: "jobsland-bd.firebaseapp.com",
  projectId: "jobsland-bd",
  storageBucket: "jobsland-bd.appspot.com",
  messagingSenderId: "763460021599",
  appId: "1:763460021599:web:9584c50bdd7de2073cdaea",
  measurementId: "G-3REV6KYK7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);