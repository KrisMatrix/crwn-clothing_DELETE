import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';  //for the database
import 'firebase/compat/auth';  //for the auth

const config = {
  apiKey: "AIzaSyDYeJnUtC27bx6RSvLWUV8fDtm9_cynLe4",
  authDomain: "crwn-db-d4225.firebaseapp.com",
  projectId: "crwn-db-d4225",
  storageBucket: "crwn-db-d4225.appspot.com",
  messagingSenderId: "721729551527",
  appId: "1:721729551527:web:26a4038880c6c6ff2cef82",
  measurementId: "G-CGD5TXRF2R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
