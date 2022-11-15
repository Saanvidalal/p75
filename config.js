import firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7eVySbFXTXl2uRQiRRr0-dd0ECRNTIns",
  authDomain: "p-75-68681.firebaseapp.com",
  databaseURL: "https://p-75-68681-default-rtdb.firebaseio.com",
  projectId: "p-75-68681",
  storageBucket: "p-75-68681.appspot.com",
  messagingSenderId: "611885907460",
  appId: "1:611885907460:web:a8c99807bc09de8451bf51",
  measurementId: "G-NFGN1275PE"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
