// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your w eb app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxxfmf_Zv_v3ryi46YV-o3vLTaqmAQovc",
  authDomain: "info-nexus.firebaseapp.com",
  projectId: "info-nexus",
  storageBucket: "info-nexus.appspot.com",
  messagingSenderId: "633224935788",
  appId: "1:633224935788:web:3ecb735aa3706eec635b49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);