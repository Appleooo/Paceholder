import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../components/navigation/AuthProvider';
import UnderlineField from '../components/UnderlineField';

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); //Ignore all log notifications

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
        textAlign: 'center',
    },
    subtitle: {
        width: 250,
        fontSize: 16,
        fontFamily: 'Cabin-Regular',
        color: '#4B4B4B',
        textAlign: 'center',
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
        color: '#4B4B4B',
    },
    otherLoginContainer: {
        marginTop: 30,
    },
    socialLoginButton: {
        flexDirection: 'row',
        width: width - 80,
        height: 42,
        marginVertical: 6,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialLoginButtontext: {
        fontFamily: 'Cabin-Regular',
        fontSize: 16,
        color: '#4B4B4B',
        paddingLeft: 7,
    },
    signupButton: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
});

const LoginScreen = () => {
    const navigation = useNavigation();
    const { login, facebookLogin } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    <UnderlineField iconName={"at-sign"} placeholder={"Email ID"} handleChange={setEmail} />
                    <UnderlineField iconName={"lock"} placeholder={"Password"} handleChange={setPassword} />

                </View>
                <View style={styles.forgetPasswordButtonContainer}>
                    <TouchableOpacity style={styles.forgetPasswordButton}
                        onPress={() => navigation.navigate("ForgetPassword")}>
                        <Text style={styles.forgetPasswordText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.loginButton}
                    onPress={() => login(email, password)}>
                    <Text style={styles.loginButtontext}>Login</Text>
                </TouchableOpacity>

                {/* Line Divider */}
                <View style={{ flexDirection: 'row', paddingHorizontal: 0 }}>
                    <View style={{ backgroundColor: '#AAAAAA', height: 1, flex: 1, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 5, color: '#AAAAAA', }}>Or</Text>
                    <View style={{ backgroundColor: '#AAAAAA', height: 1, flex: 1, alignSelf: 'center' }} />
                </View>

                <View style={styles.otherLoginContainer}>

                    <TouchableOpacity style={styles.socialLoginButton}>
                        <Icon name={"google"} size={18} color={'#4B4B4B'} />
                        <Text style={styles.socialLoginButtontext}>Continue with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialLoginButton}
                        onPress={() => facebookLogin().then(() => console.log('Signed in with Facebook!'))}>
                        <Icon name={"facebook"} size={18} color={'#4B4B4B'} />
                        <Text style={styles.socialLoginButtontext}>Continue with Facebook</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signupButton}>
                    <Text style={{ color: 'white' }}>New to Paceholder? </Text>
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
