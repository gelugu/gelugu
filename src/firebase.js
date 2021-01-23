import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

import firebaseConfig from "./firebase-config";

app.initializeApp(firebaseConfig);

export const FBread = async (ref, value) => {
  return await app.database().ref(ref).once(value);
}

export const FBlogin = async (email, password) => {
  try {
    const res = await app.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error("LogIn error:", error);
  }
};

export const FBlogout = async () => {
  await app.auth().signOut();
};

export const FBisAuthenticated = async () => {
  app.auth().onAuthStateChanged((user) => {
    if (user) return true;
    else return false;
  });
};
