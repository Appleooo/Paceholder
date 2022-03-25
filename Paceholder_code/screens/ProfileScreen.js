import React, { useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { AuthContext } from '../components/navigation/AuthProvider';


const ProfileScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => logout()}>
                <Text >Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ProfileScreen;