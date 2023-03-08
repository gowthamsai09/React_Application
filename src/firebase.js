import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByeJ170cX7V2TzaSoXIOJbXma9sGBcXO8",
  authDomain: "memepage-8df48.firebaseapp.com",
  projectId: "memepage-8df48",
  storageBucket: "memepage-8df48.appspot.com",
  messagingSenderId: "602760806722",
  appId: "1:602760806722:web:731294686fd2b5307588db",
  measurementId: "G-WTPMES8RW9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = firebase.auth()
const storage = firebase.storage()
const db = app.firestore()

export {auth,storage,db}

