import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import NewChallengeDetailScreen from '../../screens/NewChallengeDetailScreen';
import JoinedChallengeDetailScreen from '../../screens/JoinedChallengeDetailScreen';

const Stack = createNativeStackNavigator();

const HomeChallengeDetailScreenNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}

            />
            <Stack.Screen name="NewChallengeScreen" component={NewChallengeDetailScreen} />
            <Stack.Screen name="JoinedChallengeScreen" component={JoinedChallengeDetailScreen} />
        </Stack.Navigator>
    );
};

export default HomeChallengeDetailScreenNavigation;