// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4O6bdiXGiXifUuoCpPtE9sYm0k16IlSE",
  authDomain: "hotpot-b7891.firebaseapp.com",
  projectId: "hotpot-b7891",
  storageBucket: "hotpot-b7891.firebasestorage.app",
  messagingSenderId: "446915804598",
  appId: "1:446915804598:web:0fcbb98ff606db0c82d517",
  measurementId: "G-ENPYNK14ME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);

export {storage};
