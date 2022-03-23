import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import UnderlineField from '../components/UnderlineField';
import SignupScreen from './SignupScreen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.7,
        height: '100%',
        width: '100%',
        // objectFit: 'cover',
    },
    welcomeSection: {
        marginTop: 110,
        height: 155,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'grey',
    },
    welcomeTitle: {
        width: 250,
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold',
    },
    subtitle: {
        width: 250,
        fontSize: 16,
        fontFamily: 'Cabin-Regular',
        color: '#4B4B4B',
    },
    forgetPasswordButtonContainer: {
        width: width - 80,
        marginTop: 15,
        position: 'relative',
    },
    forgetPasswordButton: {
        position: 'absolute',
        right: 0,
    },
    forgetPasswordText: {
        fontSize: 13,
        fontFamily: 'Cabin-Regular',
        color: '#4B4B4B',
        textAlign: 'right',
    },
    loginButton: {
        width: width - 80,
        height: 42,
        marginTop: 55,
        marginBottom: 40,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtontext: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        color: 'white',
    },
    otherLoginContainer: {
        marginTop: 30,
    },
    otherLoginButton: {
        flexDirection: 'row',
        width: width - 80,
        height: 42,
        marginVertical: 6,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    otherLoginButtontext: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        color: 'white',
        paddingLeft: 7,
    },
    signupButton: {
        flexDirection: 'row',
        marginTop: 30,
    },
});

const LoginScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.body}>
            <Image source={require('../Assets/Images/Login-background.png')}
                style={styles.backgroundImage} />
            <SafeAreaView >
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeTitle}>Welcome to Paceholder</Text>
                    <Text style={styles.subtitle}>There's always a new challenge to keep you motivated.</Text>
                </View>
                <View>
                    <UnderlineField iconName={"at-sign"} placeholder={"Email ID"} />
                    <UnderlineField iconName={"lock"} placeholder={"Password"} />

                </View>
                <View style={styles.forgetPasswordButtonContainer}>
                    <TouchableOpacity style={styles.forgetPasswordButton}>
                        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtontext}>Login</Text>
                </TouchableOpacity>

                {/* Line Divider */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 40 }}>
                    <View style={{ backgroundColor: '#AAAAAA', height: 1, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, color: '#AAAAAA', }}>Or</Text>
                    <View style={{ backgroundColor: '#AAAAAA', height: 1, flex: 1, alignSelf: 'center' }} />
                </View>

                <View style={styles.otherLoginContainer}>

                    <TouchableOpacity style={styles.otherLoginButton}>
                        <Icon name={"google"} size={18} color={'white'} />
                        <Text style={styles.otherLoginButtontext}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.otherLoginButton}>
                        <Icon name={"facebook"} size={18} color={'white'} />
                        <Text style={styles.otherLoginButtontext}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupButton}>
                    <Text>New to Paceholder? </Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("Signup")}>
                        <Text style={{ color: '#FF9F1C' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

export default LoginScreen;
