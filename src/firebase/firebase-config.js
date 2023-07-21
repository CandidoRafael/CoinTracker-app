import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBoILqFY0XbEEUKn9OUQLZnNySTPIzFdto",
    authDomain: "cointrackr-2ca3d.firebaseapp.com",
    projectId: "cointrackr-2ca3d",
    storageBucket: "cointrackr-2ca3d.appspot.com",
    messagingSenderId: "598095200031",
    appId: "1:598095200031:web:f2555d9c3c56343681fa2a"
  };

  firebase.initializeApp(firebaseConfig)

export const projectAuth = firebase.auth()

