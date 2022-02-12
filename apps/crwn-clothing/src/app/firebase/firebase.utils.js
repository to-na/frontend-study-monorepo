import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAKD5iO5bp5gLeSIuuvvM8MYpr9UYwMJbI',
  authDomain: 'crwn-db-tn.firebaseapp.com',
  projectId: 'crwn-db-tn',
  storageBucket: 'crwn-db-tn.appspot.com',
  messagingSenderId: '469155217552',
  appId: '1:469155217552:web:48e5754eb6eb0e192ad815',
  measurementId: 'G-75FQCXEZHP',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
