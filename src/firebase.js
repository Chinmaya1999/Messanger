import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBzwCQbmNEIf77byOmcqxwWZsWaPnhFEQ",
    authDomain: "message-690c1.firebaseapp.com",
    databaseURL: "https://message-690c1.firebaseio.com",
    projectId: "message-690c1",
    storageBucket: "message-690c1.appspot.com",
    messagingSenderId: "1062190305042",
    appId: "1:1062190305042:web:03a69730c417793208edcb",
    measurementId: "G-4MMXMQ9DXN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;