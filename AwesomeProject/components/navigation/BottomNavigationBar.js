
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import CommunityScreen from '../../screens/CommunityScreen';
import CreationScreen from '../../screens/CreationScreen';
import ProgressScreen from '../../screens/ProgressScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="New" component={CreationScreen} />
            <Tab.Screen name="Progress" component={ProgressScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>

    );
}

export default NavigationTabs;