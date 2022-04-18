import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import firestore from '@react-native-firebase/firestore';

import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
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
                            .then((response) => {
                                const uid = response.user.uid;
                                const usersRef = firestore().collection('users');
                                usersRef
                                    .doc(uid)
                                    .get()
                                    .then(firestoreDocument => {
                                        if (!firestoreDocument.exists) {
                                            alert("User does not exist anymore.")
                                            return;
                                        }
                                    })
                                    .catch(error => {
                                        alert(error)
                                    });
                            })
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password, lastName, firstName) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                            .then((response) => {
                                const uid = response.user.uid
                                // store user data to firebase
                                const data = {
                                    id: uid,
                                    email,
                                    lastName,
                                    firstName,
                                };
                                const usersRef = firestore().collection('users')
                                usersRef
                                    .doc(uid)
                                    .set(data)
                                    .catch((error) => {
                                        alert(error)
                                    });
                            })
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
                forgetPassword: async (email) => {
                    try {
                        await auth().sendPasswordResetEmail(email);
                    } catch (e) {
                        console.log(e);
                    }
                },
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}