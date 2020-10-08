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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
