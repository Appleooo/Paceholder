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

const SignupScreen = () => {
    const navigation = useNavigation();
    const { register } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    // use call back function to set state in child component
    const handleChange = (text, type) => {
        switch (type) {
            case 'email':
                setEmail(text);
                break;
            case 'password':
                setPassword(text);
                break;
            case 'confirmPassword':
                setConfirmPassword(text);
                break;
            case 'firstName':
                setFirstName(text);
                break;
            case 'lastName':
                setLastName(text);
                break;
        }

        setEmail(email);
    };

    return (
        <View style={styles.body}>
            <SafeAreaView >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Icon name={"arrow-left"} size={30} />
                </TouchableOpacity>
                <Text style={styles.SignupText}>Sign up</Text>
                <View>
                    <UnderlineField iconName={"at-sign"} placeholder={"Email ID"} handleChange={setEmail} />
                    <UnderlineField iconName={"lock"} placeholder={"Password"} handleChange={setPassword} />
                    <UnderlineField iconName={"lock"} placeholder={"Confirm Password"} handleChange={setConfirmPassword} />
                    <UnderlineField iconName={"user"} placeholder={"First Name"} handleChange={setFirstName} />
                    <UnderlineField iconName={"user"} placeholder={"Last Name"} handleChange={setLastName} />
                </View>
                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => register(email, password)}>
                    <Text style={styles.signupButtontext}>Submit</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </View>
    );
}

export default SignupScreen;
