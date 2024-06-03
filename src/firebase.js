import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9Trk_EYXpVA2U3eeM_z2pdeiLKJFfsmo",
    authDomain: "my-movie-app-fc746.firebaseapp.com",
    projectId: "my-movie-app-fc746",
    storageBucket: "my-movie-app-fc746.appspot.com",
    messagingSenderId: "668471268844",
    appId: "1:668471268844:web:2769f5898b2a6f1d0c9cc9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
