import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';
import { ApplicationProvider, Layout, Avatar } from '@ui-kitten/components';

import JoinedChallengeCard from '../components/JoinedChallengeCard';
import NewChallengeCard from '../components/NewChallengeCard';
import CategoryBar from '../components/CategoryBar';
import { AuthContext } from '../components/navigation/AuthProvider';

import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    myChallengesContainer: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontFamily: 'RobotoCondensed-Bold',
        marginLeft: 20,
    },
    myChallengesMenuButton: {
        marginRight: 20,
    },
    myChallengesCardSection: {
        height: 195,
        marginTop: 16,
    },
    exploreChallengesCardSection: {
        marginTop: 5,
    },
    headerContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
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

const HomeScreenHeader = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.headerContainer}>
                <Avatar style={styles.headerAvatar} source={require('..//Assets/Images/Yijing.jpg')} />
                <Text style={styles.headerTitle}>Challenges</Text>
                <Icon style={styles.headerSearchButton} name="search" size={24} />
            </Layout>
        </ApplicationProvider>
    )
};

const MyChallengesSection = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>

            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>My Challenges</Text>
                <Icon style={styles.myChallengesMenuButton} name="menu" size={20} />
            </Layout>
            <ScrollView style={styles.myChallengesCardSection} horizontal={true} showsHorizontalScrollIndicator={false}>
                <JoinedChallengeCard />
                <JoinedChallengeCard />
                <JoinedChallengeCard />
            </ScrollView>
        </ApplicationProvider>
    );
}

const ExploreChallengesSection = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>Explores</Text>
            </Layout>
            <CategoryBar />
            <ScrollView style={styles.exploreChallengesCardSection} showsHorizontalScrollIndicator={false}>
                <NewChallengeCard />
                <NewChallengeCard />
                <NewChallengeCard />
            </ScrollView>
        </ApplicationProvider>
    );
}

function onResult(QuerySnapshot) {
    console.log('Got Users collection result.');
}

function onError(error) {
    console.error(error);
}

const HomeScreen = ({ navigation }) => {
    const [data, setData] = useState();
    const { user, setUser } = useContext(AuthContext);

    // setUser(null);
    // console.log(user.uid);
    // console.log(firebase.apps.length);
    // const a = firebase.firestore().collection('users').doc(user.uid).get()

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <HomeScreenHeader />
                <MyChallengesSection />
                <ExploreChallengesSection />
            </ScrollView>
        </SafeAreaView>

    );
}

export default HomeScreen;