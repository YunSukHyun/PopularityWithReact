import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export const login = async () => 
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    return user;
  }).catch(console.error);

export const logout = async () => {
  return signOut(auth).then(() => null);
}

export const onUserStateChange = (callback)  => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  })
}