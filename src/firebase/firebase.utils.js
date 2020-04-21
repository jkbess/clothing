import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDFOAt5bzP8FQwmWamHX26pxJjmTYpUcU0",
  authDomain: "crown-db-817e5.firebaseapp.com",
  databaseURL: "https://crown-db-817e5.firebaseio.com",
  projectId: "crown-db-817e5",
  storageBucket: "crown-db-817e5.appspot.com",
  messagingSenderId: "168536827034",
  appId: "1:168536827034:web:cdf47df5fe8d522034eb23",
  measurementId: "G-XMEJ8707BH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get(); // await forces subsequent lines to wait
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user. ', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
