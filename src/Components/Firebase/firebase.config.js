// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAVa_wmKf_0PFZz5cPCGbZsa5SELEFz1a8",
//   authDomain: "chef-recipe-hunter-a4be2.firebaseapp.com",
//   projectId: "chef-recipe-hunter-a4be2",
//   storageBucket: "chef-recipe-hunter-a4be2.appspot.com",
//   messagingSenderId: "219143363062",
//   appId: "1:219143363062:web:a462c28b5a865f0a364fd7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;