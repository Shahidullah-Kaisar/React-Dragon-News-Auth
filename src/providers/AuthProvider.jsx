import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createRegisterUser = async (email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    };

    const signInUser = async (email, password) => {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return userCredential;
    };
    
    useEffect(() =>{
        const unSubscrirbe = onAuthStateChanged(auth, (currentUser) =>{
          console.log('saved data until sighnout',currentUser)
          setUser(currentUser);
          setLoading(false);
        });
        return ()=> unSubscrirbe();
      },[]);

    
      const userSignOut = async () => {
        await signOut(auth);
        setUser(null);
    };

    const authInfo = {user, createRegisterUser, signInUser, userSignOut, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;