import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiW733X2qA2vkmgCHeoVWvmCeqLmo-foU",
  authDomain: "gelugu-portfolio.firebaseapp.com",
  databaseURL: "https://gelugu-portfolio.firebaseio.com",
  projectId: "gelugu-portfolio",
  storageBucket: "gelugu-portfolio.appspot.com",
  messagingSenderId: "205785521981",
  appId: "1:205785521981:web:5e8e3c4f491678b38eaf54",
};

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
