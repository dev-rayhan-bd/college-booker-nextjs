import AuthContext from "@/contexts/AuthContext";
import auth, { googleProvider } from "@/firebase/firebase.auth";
import {
  createUserWithEmailAndPassword,
 
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

 //  register with email and pass
 const createUser = (email, password) => {
  setLoader(true);
  return createUserWithEmailAndPassword(auth, email, password);
};
const updateUserData = (user, name, photo) => {
  updateProfile(user, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      toast.success("Successfull");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// login with email & pass
const login = (email, password) => {
  setLoader(true);
  return signInWithEmailAndPassword(auth, email, password);
};
// logOut
const logout = () => {
  setLoader(true);
  return signOut(auth);
};
// google login
const googleLogin = (provider) => {
  setLoader(true);
  return signInWithPopup(auth, provider);
};
//   reset pass
const resetPass=(email)=>{
  setLoader(true)
  return  sendPasswordResetEmail(auth,email)
}
 
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoader(false);
  });
  return () => {
    return unsubscribe();
  };
}, []);
  
  const value = {
    user,
    loader,
    createUser,
    updateUserData,
    login,
    logout,
    googleLogin,
    setUser,
    resetPass
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;