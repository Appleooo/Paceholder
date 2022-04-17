
import React, { useContext } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { AuthContext } from '../components/navigation/AuthProvider';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    logoutButton: {
        width: width - 80,
        height: 42,
        marginTop: 55,
        marginBottom: 40,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoutButtontext: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        color: '#4B4B4B',
    },
})

const ProfileScreen = ({ navigation }) => {
    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView style={styles.body}>
            <TouchableOpacity style={styles.logoutButton}
                onPress={() => logout()}>
                <Text style={styles.logoutButtontext}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default ProfileScreen;