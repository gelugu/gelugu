import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

import firebaseConfig from "./firebase-config";

app.initializeApp(firebaseConfig);

export const FBlogin = (email, password) => {
  console.log("log", email, password)
  app.auth().signInWithEmailAndPassword(email, password);
}

export const logout = () => {
  app.auth().signOut();
}

export const FBregister = async (name, email, password) => {
  console.log("reg")
  await app.auth().createUserWithEmailAndPassword(email, password);
  return app.auth().currentUser.updateProfile({
    displayName: name,
  });
};
