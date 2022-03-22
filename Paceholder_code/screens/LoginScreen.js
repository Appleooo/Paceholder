import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

import UnderlineField from '../components/UnderlineField';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
    welcome: {
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Cabin-Regular',
    }
});

const LoginScreen = () => {
    return (
        <View style={styles.body}>
            
            <Text>Welcome to Paceholder</Text>
            <Text>There's always a new challenge to keep you motivated.</Text>

            <UnderlineField iconName={"at-sign"} title={"Email ID"} />
        </View>
    );
}

export default LoginScreen;
