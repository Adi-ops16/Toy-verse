import React, { useEffect, useState } from 'react';
import { app } from '../Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { AuthContext } from '../Context/AuthContext';
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    // registration handler
    const createUser = (email, password) => {
        setAuthLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login handler
    const loginUser = (email, password) => {
        setAuthLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign up/login
    const handleGoogleAuth = () => {
        setAuthLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //update user 
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setAuthLoading(false)
        })
        return () => unsubscribe()
    }, [setAuthLoading])

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // log out
    const logOut = () => {
        return signOut(auth)
    }

    const authData = {
        user,
        setUser,
        authLoading,
        setAuthLoading,
        createUser,
        loginUser,
        logOut,
        handleGoogleAuth,
        updateUser,
        resetPassword
    }

    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;