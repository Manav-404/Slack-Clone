import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrT9i9w8ImVOygXg_KBole5aQfAwBLujA",
  authDomain: "slack-clone-81828.firebaseapp.com",
  databaseURL: "https://slack-clone-81828.firebaseio.com",
  projectId: "slack-clone-81828",
  storageBucket: "slack-clone-81828.appspot.com",
  messagingSenderId: "755930223818",
  appId: "1:755930223818:web:40f39738160a9568429033",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
