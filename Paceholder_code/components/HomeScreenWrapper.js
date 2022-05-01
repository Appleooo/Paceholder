import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { AuthContext } from '../components/navigation/AuthProvider';
import HomeScreen from '../screens/HomeScreen';
import firestore from '@react-native-firebase/firestore';


const HomeScreenWrapper = () => {
    const [challengeData, setChallengeData] = useState([]);
    const [newChallengeData, setNewChallengeData] = useState([]);
    const [joinedChallengeData, setJoinedChallengeData] = useState([]);
    const [joinedChallengeIDList, setJoinedChallengeIDList] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const { user, setUser } = useContext(AuthContext);


    // fetch all public challenge data
    useEffect(() => {
        const subscriber = firestore()
            .collection('newChallenges')
            .onSnapshot(documentSnapshot => {
                data = [];
                documentSnapshot.docs.map(doc => data.push(doc.data()))
                setNewChallengeData(data)
            });
        console.log('------ newChallengeData in use effect', newChallengeData)
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
        console.log('------ joinedChallengeIDList', joinedChallengeIDList)

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
        console.log('------ joinedChallengeData', joinedChallengeData)
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    console.log('------ newChallengeData in wrapper', newChallengeData)

    // force component to rerender
    if (refresh == 0) {
        setRefresh(refresh + 1)
    }
    return <HomeScreen newChallengeData={newChallengeData} joinedChallengeData={joinedChallengeData} joinedChallengeIDList={joinedChallengeIDList} />
}

export default HomeScreenWrapper;