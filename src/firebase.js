import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdLJj-DYu3eISxeX-SMkcDlg1P4bIMEuM",
  authDomain: "realtor-f001d.firebaseapp.com",
  projectId: "realtor-f001d",
  storageBucket: "realtor-f001d.appspot.com",
  messagingSenderId: "464376812517",
  appId: "1:464376812517:web:43f47382b97231eb91150c"
};

initializeApp(firebaseConfig);
export const db = getFirestore();