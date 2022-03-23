import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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
                forgetPassword: async (email) => {
                    try {
                        await auth().sendPasswordResetEmail(email);
                    } catch (e) {
                        console.log(e);
                    }
                },
                facebookLogin: async () => {
                    try {
                        // // Attempt login with permissions
                        // const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                        // if (result.isCancelled) {
                        //     throw 'User cancelled the login process';
                        // }

                        // // Once signed in, get the users AccesToken
                        // const data = await AccessToken.getCurrentAccessToken();

                        // if (!data) {
                        //     throw 'Something went wrong obtaining access token';
                        // }

                        // // Create a Firebase credential with the AccessToken
                        // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                        // // Sign-in the user with the credential
                        // return await auth().signInWithCredential(facebookCredential);
                    } catch (e) {
                        // console.log(e);
                    }
                }
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}