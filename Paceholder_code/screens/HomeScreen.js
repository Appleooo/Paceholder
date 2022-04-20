import React, { useState, useContext, useEffect, useRef } from 'react';
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

const MyChallengesSection = (joinedChallengeData, joinedChallengeIDList) => {
    console.log('--------  my section');
    console.log(joinedChallengeIDList);
    // let userJoinedChallengeData = [];
    // if (joinedChallengeIDList != {}) {
    //     joinedChallengeIDList.forEach(id => {
    //         joinedChallengeData.joinedChallengeData.forEach(challengeInfo => {
    //             if (challengeInfo.id == id) {
    //                 userJoinedChallengeData.push(challengeInfo);
    //             }
    //         })
    //     })
    // }
    // let userJoinedChallengeData = 
    let joinedChallengeComponents = [];
    // if (data.data.length > 0) {
    //     joinedChallengeComponents = data.data.map(data =>
    //         <JoinedChallengeCard challengeInfo={data} />
    //     )
    // }
    console.log(joinedChallengeComponents)

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>My Challenges</Text>
                <Icon style={styles.myChallengesMenuButton} name="menu" size={20} />
            </Layout>
            <ScrollView style={styles.myChallengesCardSection} horizontal={true} showsHorizontalScrollIndicator={false}>
                {joinedChallengeComponents}
            </ScrollView>
        </ApplicationProvider>
    );
}

const ExploreChallengesSection = (newChallengeData) => {
    console.log('--------  explore section');
    let newChallengeComponents = [];
    if (newChallengeData.newChallengeData.length > 0) {
        newChallengeComponents = newChallengeData.newChallengeData.map(data =>
            <NewChallengeCard challengeInfo={data} />
        )
    }

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>Explores</Text>
            </Layout>
            <CategoryBar />
            <ScrollView style={styles.exploreChallengesCardSection} showsHorizontalScrollIndicator={false}>
                {newChallengeComponents}
            </ScrollView>
        </ApplicationProvider>
    );
}

const HomeScreen = ({ navigation }) => {
    const [challengeData, setChallengeData] = useState([]);
    const [newChallengeData, setNewChallengeData] = useState([]);
    const [joinedChallengeData, setJoinedChallengeData] = useState([]);
    const [joinedChallengeIDList, setJoinedChallengeIDList] = useState([]);
    const { user, setUser } = useContext(AuthContext);


    // fetch all public challenge data
    useEffect(() => {
        const subscriber = firestore()
            .collection('newChallenges')
            .onSnapshot(documentSnapshot => {
                data = [];
                documentSnapshot.docs.map(doc => data.push(doc.data()))
                setChallengeData(data)
                // filter public challenge data
                a = []
                challengeData.forEach(data => {
                    participantList = data.participantList;
                    if (!participantList.includes(user.uid)) {
                        a.push(data)
                    }
                })
                setNewChallengeData(a)
            });
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    // fetch joined challenge list
    useEffect(() => {

        const subscriber = firestore()
            .collection('users')
            .doc(user.uid)
            .onSnapshot(documentSnapshot => {
                // console.log(documentSnapshot.data().joinedChallengeList)
                setJoinedChallengeIDList(documentSnapshot.data().joinedChallengeList);
            });
        // console.log('------ joinedChallengeIDList', joinedChallengeIDList)

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    // fetch all joined challenge data
    useEffect(() => {
        const subscriber = firestore()
            .collection('joinedChallenges')
            .onSnapshot(documentSnapshot => {
                data = [];
                documentSnapshot.docs.map(doc => data.push(doc.data()))
                setJoinedChallengeData(data)
            });
        // console.log('------ joinedChallengeData', joinedChallengeData)
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);




    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <HomeScreenHeader />
                <MyChallengesSection joinedChallengeData={joinedChallengeData} joinedChallengeIDList={joinedChallengeIDList} />
                <ExploreChallengesSection newChallengeData={newChallengeData} />
            </ScrollView>
        </SafeAreaView>

    );
}

export default HomeScreen;