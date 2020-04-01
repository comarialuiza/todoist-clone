import firebase from 'forebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA60-bPlPiJB7XVJReDjKefUfL-GxvnZPg",
    authDomain: "todoist-clone-malu.firebaseapp.com",
    databaseURL: "https://todoist-clone-malu.firebaseio.com",
    projectId: "todoist-clone-malu",
    storageBucket: "todoist-clone-malu.appspot.com",
    messagingSenderId: "302884644100",
    appId: "1:302884644100:web:5ee03343284dfe556d1c51"
})

export { firebaseConfig as firebase };