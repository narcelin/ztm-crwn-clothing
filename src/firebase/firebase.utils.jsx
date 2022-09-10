// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
  getFirestore,
  doc, //used to retrieve docs from database
  getDoc,
  setDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsaydpXHCx1F8FRG6JpBB6TrdFCOtCA0s",
  authDomain: "crwn-clothing-987cf.firebaseapp.com",
  projectId: "crwn-clothing-987cf",
  storageBucket: "crwn-clothing-987cf.appspot.com",
  messagingSenderId: "807750090694",
  appId: "1:807750090694:web:4a45e12811a7fe47a43cc7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //Directly points to firebases database

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  //   console.log(userSnapshot);
  //   console.log(userSnapshot.exists());
  //   console.log(userAuth.displayName);

  //if user does not exists
  //create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }

    //if user data exists
    //return user reference
  }

  return userDocRef;
};
