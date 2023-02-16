import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyChK1LhaYc6YKIZn3hzlKVECIcPzez4-WY",
  authDomain: "examwebapp-61fd8.firebaseapp.com",
  projectId: "examwebapp-61fd8",
  storageBucket: "examwebapp-61fd8.appspot.com",
  messagingSenderId: "1062495508164",
  appId: "1:1062495508164:web:9f3d2ec47a6a7b1fb1db91"
})

export const auth = app.auth()
export default app
