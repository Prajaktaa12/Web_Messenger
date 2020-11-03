import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7sibk7E4tmCGO4hM6NyozD9t5bCPkWwo",
  authDomain: "project1-3a794.firebaseapp.com",
  databaseURL: "https://project1-3a794.firebaseio.com",
  projectId: "project1-3a794",
  storageBucket: "project1-3a794.appspot.com",
  messagingSenderId: "463960499756",
  appId: "1:463960499756:web:8558066d4e96b98785d389",
  measurementId: "G-GPE322SHF0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
