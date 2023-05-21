import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../utilities/Firebase/Firebase_config";

//contextAPi
export const AuthContext = createContext(null);
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
    logOut,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
