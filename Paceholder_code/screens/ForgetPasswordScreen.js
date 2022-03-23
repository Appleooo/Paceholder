import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image } from 'react-native';

import UnderlineField from '../components/UnderlineField';
import { AuthContext } from '../components/navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#FFBF69',
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        width: 30,
        height: 30,
        marginTop: 47,
    },
    SignupText: {
        width: 250,
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold',
        marginTop: 45,
        marginBottom: 43,
    },
    SignupSubtitleText: {
        width: 250,
        fontSize: 16,
        fontFamily: 'RobotoCondensed-Bold',
        color: '#4B4B4B',
        marginTop: 45,
        marginBottom: 43,
    },
    signupButton: {
        width: width - 80,
        height: 42,
        marginTop: 55,
        marginBottom: 40,
        backgroundColor: '#4B4B4B',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupButtontext: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        color: '#FFBF69',
    },
});

const ForgetPassword = () => {
    const navigation = useNavigation();
    const { forgetPassword } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    return (
        <View style={styles.body}>
            <SafeAreaView >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Icon name={"arrow-left"} size={30} />
                </TouchableOpacity>
                <Text style={styles.SignupText}>Forget Password?</Text>
                <Text style={styles.SignupSubtitleText}>Don't worry! It happens. Please enter the email address
                    associated with your account.</Text>

                <View>
                    <UnderlineField iconName={"at-sign"} placeholder={"Email ID"} handleChange={setEmail} />
                </View>
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => forgetPassword(email)}>
                    <Text style={styles.signupButtontext}>Submit</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </View>
    );
}

export default ForgetPassword;
