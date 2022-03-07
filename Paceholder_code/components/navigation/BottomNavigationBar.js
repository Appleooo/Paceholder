
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import CommunityScreen from '../../screens/CommunityScreen';
import CreationScreen from '../../screens/CreationScreen';
import ProgressScreen from '../../screens/ProgressScreen';
import ProfileScreen from '../../screens/ProfileScreen';

import Icon from 'react-native-vector-icons/Feather';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

Icon.loadFont();
const styles = StyleSheet.create({
    navigationBar: {
        position: 'absolute',
        bottom: 25,
        left: 25,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90,
    },
    shadow: {
        shadowColor: '#7F5DF0',
    },
    tabButton: {
        width: 25,
        height: 25,
    }
});

const Tab = createBottomTabNavigator();
const CustomCreationTabBarButton = ({ children, onPress }) => {
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}>
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
        }}
        >
            {children}
        </View>
    </TouchableOpacity>
}

const NavigationTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    // tabBarStyle: { ...styles.navigationBar },
                    tabBarActiveTintColor: '#FF9F1C',
                    tabBarInactiveTintColor: '#A1A1A1',
                }}
            >
                <Tab.Screen
                    name="Home"
                    initalRouteName="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                    }} />
                <Tab.Screen
                    name="Community"
                    component={CommunityScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="aperture" size={size} color={color} />
                        ),
                    }} />
                <Tab.Screen
                    name="New"
                    component={CreationScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="plus-circle" size={size} color={color} />
                        ),
                        // tabBarButton: (props) => (
                        //     <CustomCreationTabBarButton {...props} />
                        // )
                    }}
                />
                <Tab.Screen
                    name="Progress"
                    component={ProgressScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="pie-chart" size={size} color={color} />
                        ),
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="user" size={size} color={color} />
                        ),
                    }} />
            </Tab.Navigator>
        </>
    );
}

export default NavigationTabs;