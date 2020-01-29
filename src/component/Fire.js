import firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyD_RQjsjntAkMJHxsLWwAt4iUsFMls4HRo",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://react-firebase-66d18.firebaseio.com/",
    projectId: "project-id",
    storageBucket: "project-id.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
  };
  var fire=firebase.initializeApp(config);
   
  
  

  export default fire;