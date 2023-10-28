// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHvXuYL_KTsqz0toAYRucp3H6vyPCnOOA",
  authDomain: "ecommerce-ad59c.firebaseapp.com",
  projectId: "ecommerce-ad59c",
  storageBucket: "ecommerce-ad59c.appspot.com",
  messagingSenderId: "704495203644",
  appId: "1:704495203644:web:4921fda7e75589e3759a39",
  measurementId: "G-WN2Y26ZX48"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);