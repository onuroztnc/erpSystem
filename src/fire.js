
import firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZ9AMMRexTZMvPe0ta_XRcslcswJ0Rb6g",
    authDomain: "oztuncerp-9b09c.firebaseapp.com",
    projectId: "oztuncerp-9b09c",
    storageBucket: "oztuncerp-9b09c.appspot.com",
    messagingSenderId: "772832537397",
    appId: "1:772832537397:web:a3d4123d439fd5c168fa7c"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;