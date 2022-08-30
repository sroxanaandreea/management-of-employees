import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updatePassword,
  updateEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArwh99FtsTH1Wj36ElVi2sxut5AT9b_0Q",
  authDomain: "employeesmanagement-ac433.firebaseapp.com",
  projectId: "employeesmanagement-ac433",
  storageBucket: "employeesmanagement-ac433.appspot.com",
  messagingSenderId: "701433202624",
  appId: "1:701433202624:web:d91c9bcd68f68523382a25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signIn = async (email: string, password: string) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const signUp = async (email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    localStorage.setItem("JWT", await res.user.getIdToken());
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const changeUserPassword = async (
  email: string,
  password: string,
  newPassword: string,
  newEmail: string
) => {
  try {
    signInWithEmailAndPassword(auth, email, password).then(function (
      userCredential
    ) {
      updateEmail(userCredential.user, newEmail);
      updatePassword(userCredential.user, newPassword);
    });
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const signOut = async () => {
  await firebaseSignOut(auth);
};

export { auth, signIn, signOut, signUp, changeUserPassword };
