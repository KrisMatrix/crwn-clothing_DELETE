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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) {
    return
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //get object for user from firestore db
                                        //If no such user, returns emtpy object
  if (!snapShot.exists) { //if user does not exists in firestore db, add user.
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
