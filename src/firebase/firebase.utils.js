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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();

};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transformedCollection.reduce((accumulator, colection) => {
    accumulator[colection.title.toLowerCase()] = colection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propmt: 'slect_account'});
export const signInWithGoogle = () => {auth.signInWithPopup(provider)};

export default firebase;