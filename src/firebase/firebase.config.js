// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOMdIY6UNYMYLt-gTNEMIQTllqt0YZjow",
  authDomain: "overstock-shop.firebaseapp.com",
  projectId: "overstock-shop",
  storageBucket: "overstock-shop.appspot.com",
  messagingSenderId: "38649442660",
  appId: "1:38649442660:web:dead8e296fbe0257534a71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;