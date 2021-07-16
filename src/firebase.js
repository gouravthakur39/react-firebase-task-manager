import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyCxL_G-AMH5RhkAg7pb3QGp-cU22ryFmNw",
//   authDomain: "task-manager-real.firebaseapp.com",
//   databaseURL: "https://task-manager-real-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "task-manager-real",
//   storageBucket: "task-manager-real.appspot.com",
//   messagingSenderId: "1039220184547",
//   appId: "1:1039220184547:web:b4c9ddd8e1501095713cd6",

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID

});

export { firebaseConfig as firebase };
