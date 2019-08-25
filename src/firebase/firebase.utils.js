import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3siQ4EbuoN7xNJ7lgcIgKfw4Z_iey5NE",
    authDomain: "e-shop-89a0e.firebaseapp.com",
    databaseURL: "https://e-shop-89a0e.firebaseio.com",
    projectId: "e-shop-89a0e",
    storageBucket: "",
    messagingSenderId: "556898898174",
    appId: "1:556898898174:web:0454085ed67df915"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'slect_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;