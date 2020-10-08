import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAP4syxpCCZDBPnUUgalhG-9FCmZ0RujZI",
  authDomain: "crwn-db-741e0.firebaseapp.com",
  databaseURL: "https://crwn-db-741e0.firebaseio.com",
  projectId: "crwn-db-741e0",
  storageBucket: "crwn-db-741e0.appspot.com",
  messagingSenderId: "194180318622",
  appId: "1:194180318622:web:c76a6f3b72d12d48e7828f",
  measurementId: "G-EGN483NJ5Q",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
