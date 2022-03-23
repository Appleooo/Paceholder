import React, { useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { AuthContext } from '../components/navigation/AuthProvider';


const ProfileScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    return (
        <View>
            <TouchableOpacity
                onPress={() => logout()}>
                <Text >Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileScreen;