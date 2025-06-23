import React, { use, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import Router from '../routes/Router';
import app from '../Firebase/Firebase-config';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = React.createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    
    const createNewUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth,email, password);
    }
    const userLogin = (email, password) => {
      setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
      setLoading(true);
     
    
    return signOut(auth)
    
      
    }
 

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logout,
        userLogin,
        loading,
        updateUser
    }
    useEffect(() => {
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
      
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    },[]);
    return (
        <div>
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;