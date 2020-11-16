import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsaRwztxWD1aZWgPSCs5Y-R-mhzS7FHgE",
    authDomain: "crwn-db-e7637.firebaseapp.com",
    databaseURL: "https://crwn-db-e7637.firebaseio.com",
    projectId: "crwn-db-e7637",
    storageBucket: "crwn-db-e7637.appspot.com",
    messagingSenderId: "1013617175214",
    appId: "1:1013617175214:web:1582d1f04710b69b62db3f",
    measurementId: "G-7T0R68ZD5G"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});

const signInWithGooglePopup = () => auth.signInWithPopup(googleAuthProvider);

export {
    auth,
    firestore,
    signInWithGooglePopup
};
export default firebase;