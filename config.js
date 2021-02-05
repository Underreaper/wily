import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBgZJpywiZXIluROss91x5ThapobFSTuMA",
    authDomain: "wily-app-359bd.firebaseapp.com",
    projectId: "wily-app-359bd",
    storageBucket: "wily-app-359bd.appspot.com",
    messagingSenderId: "876786853803",
    appId: "1:876786853803:web:27cb96178576c5e75494ee"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();