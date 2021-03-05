import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-ENKhKgXc6TroRitdAR9YiBqUJK4mHEY",
  authDomain: "personal-brand-website.firebaseapp.com",
  projectId: "personal-brand-website",
  storageBucket: "personal-brand-website.appspot.com",
  messagingSenderId: "695531609914",
  appId: "1:695531609914:web:f62b857459f9b7d20b7a03"
});


const db = firebaseApp.firestore();

export {db};