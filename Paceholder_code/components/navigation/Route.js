import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import BottomNavigationBar from './BottomNavigationBar';
import AuthNavigation from './AuthNavigation';
import LoginScreen from "../../screens/LoginScreen";
import { AuthContext } from './AuthProvider';

import { Provider as PaperProvider } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Route = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged =
        (user) => {
            setUser(user);
            if (initializing) setInitializing(false);
        }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <PaperProvider>
            {user ? <BottomNavigationBar /> : <AuthNavigation />}
        </PaperProvider>

    );
}

export default Route;