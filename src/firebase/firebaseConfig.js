import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB0uo7SeNcLaUMj03PsKxjCMc7nylYoATs",
    authDomain: "journal-app-411d1.firebaseapp.com",
    projectId: "journal-app-411d1",
    storageBucket: "journal-app-411d1.appspot.com",
    messagingSenderId: "74026990607",
    appId: "1:74026990607:web:fe3ac14d2f482aceb9777a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { 
    db,
    googleAuthProvider,
    firebase
}