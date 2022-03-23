import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async (email, password) => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                },
                forgetPassword: async(email) =>{
                    try {
                        await auth().sendPasswordResetEmail(email);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}