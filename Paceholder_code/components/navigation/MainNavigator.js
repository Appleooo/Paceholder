import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigationBar } from './BottomNavigationBar';
import CreationModal from '../CreationModal';

const Stack = createNativeStackNavigator();

export function MainNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: { backgroundColor: "transparent" },
                headerShown: false,
            }}
        >
            <Stack.Screen name="main" component={BottomNavigationBar} />
            <Stack.Screen name="creation-modal" component={CreationModal} />
        </Stack.Navigator>
    )
}