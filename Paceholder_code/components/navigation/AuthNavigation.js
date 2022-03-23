import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import ForgetPasswordScreen from '../../screens/ForgetPasswordScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}

            />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        </Stack.Navigator>
    );
};

export default AuthNavigation;