
import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import CommunityScreen from '../../screens/CommunityScreen';
import CreationScreen from '../../screens/CreationScreen';
import ProgressScreen from '../../screens/ProgressScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import ChallengeCreationScreen from '../../screens/ChallengeCreationScreen';
import HomeChallengeDetailScreenNavigation from './HomeChallengeDetailScreenNavigation';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { mapping, light as lightTheme } from '@eva-design/eva';

Icon.loadFont();

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
    },
    creationPanel: {
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFBF69',
        width: 160,
        height: 55,
        position: 'absolute',
        bottom: 0,
        borderRadius: 25,
    },
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

const CreationPanel = (showCreationPanel, setShowCreationPanel) => {
    return (
        <View style={styles.creationPanel}>
            <View >
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ChallengeCreationScreen")
                    }}>
                    <Icon name="award" size={22} color={"#242424"} />
                    <Text>Challenge</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setShowCreationPanel(false);
                    }}>
                    <Icon name="x" size={22} color={"#242424"} />
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const NavigationTabs = () => {
    const [showCreationPanel, setShowCreationPanel] = useState(false);

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    // tabBarStyle: { ...styles.navigationBar },
                    tabBarActiveTintColor: '#FF9F1C',
                    tabBarInactiveTintColor: '#A1A1A1',
                    headerTitleStyle: { ...styles.headerTitle },
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    initalRouteName="Home"
                    component={HomeChallengeDetailScreenNavigation}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="home" size={size} color={color} />
                        ),
                        title: 'Challenges',
                        headerTitle: (props) => <HomeScreenHeader />
                    }} />

                {/* <Tab.Screen
                    name="Community"
                    component={CommunityScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="aperture" size={size} color={color} />
                        ),
                    }} /> */}

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
                    }} />

                {/* <Tab.Screen
                    name="Progress"
                    component={ProgressScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="pie-chart" size={size} color={color} />
                        ),
                    }} /> */}

                {/* <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Icon name="user" size={size} color={color} />
                        ),
                    }} /> */}
            </Tab.Navigator>
        </>
    );
}

export default NavigationTabs;