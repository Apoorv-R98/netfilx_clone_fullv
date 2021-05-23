// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQnAmxLXv9nCG497uNtqEnnuVM8DcEUm4",
  authDomain: "netflix-clone-f4098.firebaseapp.com",
  projectId: "netflix-clone-f4098",
  storageBucket: "netflix-clone-f4098.appspot.com",
  messagingSenderId: "753057214037",
  appId: "1:753057214037:web:cfd08e97ee16566d04aedc",
  measurementId: "G-BW7WV2QHQ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
