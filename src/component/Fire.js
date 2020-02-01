import firebase from 'firebase'
import 'firebase/storage'
 var config = {
  apiKey: "AIzaSyD_RQjsjntAkMJHxsLWwAt4iUsFMls4HRo",
  authDomain: "react-firebase-66d18.firebaseapp.com",
  databaseURL: "https://react-firebase-66d18.firebaseio.com",
  projectId: "react-firebase-66d18",
  storageBucket: "react-firebase-66d18.appspot.com",
  messagingSenderId: "988548055085",
  appId: "1:988548055085:web:a4365309aab6736d2d78a4"
  };
  var fire=firebase.initializeApp(config);
  export  {fire as default}