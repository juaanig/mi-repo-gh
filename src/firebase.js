import firebase from "firebase"

// Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBjPnM8oom0-jdqS0ItSyihD6C5VOFQ9i8",
    authDomain: "juan-ea45d.firebaseapp.com",
    projectId: "juan-ea45d",
    storageBucket: "juan-ea45d.appspot.com",
    messagingSenderId: "826763527785",
    appId: "1:826763527785:web:d85ff448cd5ef3425b44f8",
    measurementId: "G-2GPGZNF74T"
  };
  
  firebase.initializeApp(firebaseConfig);

  firebase.db = firebase.firestore();
 export default firebase;