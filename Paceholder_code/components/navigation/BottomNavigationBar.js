
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import CommunityScreen from '../../screens/CommunityScreen';
import CreationScreen from '../../screens/CreationScreen';
import ProgressScreen from '../../screens/ProgressScreen';
import ProfileScreen from '../../screens/ProfileScreen';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { ApplicationProvider, Layout, Avatar } from '@ui-kitten/components';
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
    headerContainer: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'space-between',

    },
    headerTitle: {
        fontSize: 26,
        fontFamily: 'RobotoCondensed-Bold',
    },
    headerAvatar: {
        marginLeft: 18,
    },
    headerSearchButton: {
        marginRight: 18,
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

const HomeScreenHeader = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.headerContainer}>
                <Avatar style={styles.headerAvatar} source={require('../../Assets/Images/Yijing.jpg')} />
                <Text style={styles.headerTitle}>Challenges</Text>
                <Icon style={styles.headerSearchButton} name="search" size={24} />
            </Layout>
        </ApplicationProvider>
    )
}

const NavigationTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    // tabBarStyle: { ...styles.navigationBar },
                    tabBarActiveTintColor: '#FF9F1C',
                    tabBarInactiveTintColor: '#A1A1A1',
                    headerTitleStyle: { ...styles.headerTitle },
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
                        title: 'Challenges',
                        headerTitle: (props) => <HomeScreenHeader />
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
                    }} />

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