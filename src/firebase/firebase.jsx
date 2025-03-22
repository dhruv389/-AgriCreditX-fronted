import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  onAuthStateChanged,  
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";

// 🔐 Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH_XqMC9e4mVJTQkXPAXMr-lp-lFhHcPc",
  authDomain: "farmer-app-bbf77.firebaseapp.com",
  projectId: "farmer-app-bbf77",
  storageBucket: "farmer-app-bbf77.appspot.com",  // Fixed storageBucket typo
  messagingSenderId: "509149135649",
  appId: "1:509149135649:web:fef916d05cc3ca8e6df460",
  measurementId: "G-YKDER1689L"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// 🔄 Create Firebase Context
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// 🟢 Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
  }
};

// 🔴 Google Sign-Out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export const listenForAuthChanges = (setUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
};


// 🛠️ Firebase Provider Component
export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserUid(user.uid);
      } else {
        setUser(null);
        setUserUid("");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ user, userUid, isLoggedIn: !!user, signInWithGoogle, logout ,listenForAuthChanges}}>
      {children}
    </FirebaseContext.Provider>
  );
};

// Export Firebase instances
export { app, auth };
