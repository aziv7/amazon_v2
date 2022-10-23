import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlIEFSEvZCGtjUSE9ce1qaBDajrw2yrGM',
  authDomain: 'fir-32262.firebaseapp.com',
  projectId: 'fir-32262',
  storageBucket: 'fir-32262.appspot.com',
  messagingSenderId: '72619605494',
  appId: '1:72619605494:web:97e3496f63830f6b0a5bd7',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
