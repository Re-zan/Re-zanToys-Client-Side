import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../utilities/Firebase/Firebase_config";

//contextAPi
export const AuthContext = createContext(null);

//providers
const provider = new GoogleAuthProvider();
//auth
const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  //user
  const [user, setUser] = useState(null);

  //loader
  const [loader, setLoader] = useState(true);

  //createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const logIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google log in
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //onAuth
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      unsubscriber();
    };
  }, []);

  //logOut
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const authInfo = {
    user,
    createUser,
    logIn,
    googleLogin,
    logOut,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
