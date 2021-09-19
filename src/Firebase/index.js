import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDdbupijJnbd3-UWKYXlAN31hD0E89oq8Q",
  authDomain: "sportfield-8d53a.firebaseapp.com",
  databaseURL: "https://sportfield-8d53a-default-rtdb.firebaseio.com",
  projectId: "sportfield-8d53a",
  storageBucket: "sportfield-8d53a.appspot.com",
  messagingSenderId: "237025534483",
  appId: "1:237025534483:web:762f0cd236594d4ee8d5e6",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
export const auth = app.auth();
