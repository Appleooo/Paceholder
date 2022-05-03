import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Layout } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Feather';

import JoinedChallengeCard from '../components/JoinedChallengeCard';
import NewChallengeCard from '../components/NewChallengeCard';
import CategoryBar from '../components/CategoryBar';
import { AuthContext } from '../components/navigation/AuthProvider';
import MenuView from '../components/MenuView';

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
        position: 'relative',
        width: '100%',
    },
    myChallengesContainer: {
        zIndex: 100,
    },
    myChallengesHeader: {
        width: 200,
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
        marginTop: 10,
    },
    headerContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    headerTitle: {
        fontSize: 26,
        fontFamily: 'RobotoCondensed-Bold',
    },
    headerAvatar: {
        // marginLeft: 18,
    },
    headerSearchButton: {
        // marginRight: 18,
        position: 'absolute',
        marginTop: -10,
        marginLeft: width / 4,
    },
    homeScreenBody: {
        position: 'absolute',
        top: 50,
        // backgroundColor: 'grey',
        zIndex: -100,
    },

});

type Props = Readonly<{
    newChallengeData: Array,
    joinedChallengeData: Array,
    joinedChallengeIDList: Array,

}>;

const HomeScreenHeader = (props) => {
    return (
        <>
            <View style={styles.headerContainer}>
                {/* <Avatar style={styles.headerAvatar} source={require('..//Assets/Images/Yijing.jpg')} /> */}
                <Text style={styles.headerTitle}>Challenges</Text>
                <TouchableOpacity onPress={() => props.setShowMenuView(!props.showMenuView)}>
                    <Icon style={styles.headerSearchButton} name="menu" size={24} />
                </TouchableOpacity>
            </View>
            <MenuView showMenuView={props.showMenuView} setShowMenuView={props.setShowMenuView} />
        </>
    )
};

const MyChallengesSection = (props) => {
    // console.log('--------  my section', joinedChallengeIDList);
    const { joinedChallengeData, joinedChallengeIDList } = props;

    let userJoinedChallengeData = [];

    if (typeof joinedChallengeData !== 'undefined' && joinedChallengeData.length > 0
        && typeof joinedChallengeIDList !== 'undefined' && joinedChallengeIDList.length > 0) {
        joinedChallengeData.forEach(data => {
            if (joinedChallengeIDList.includes(data.id)) {
                userJoinedChallengeData.push(data)
            }
        })
    }

    let joinedChallengeComponents = [];
    if (userJoinedChallengeData.length > 0) {
        joinedChallengeComponents = userJoinedChallengeData.map(data =>
            <JoinedChallengeCard challengeInfo={data} />
        )
    }

    return (
        <>
            <View style={styles.myChallengesContainer}>
                <Layout style={styles.myChallengesHeader}>
                    <Text style={styles.sectionTitle}>My Challenges</Text>
                    {/* <Icon style={styles.myChallengesMenuButton} name="menu" size={20} /> */}
                </Layout>
                <ScrollView style={styles.myChallengesCardSection} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {joinedChallengeComponents}
                </ScrollView>
            </View>
        </>
    );
}

const ExploreChallengesSection = (props) => {
    const { newChallengeData, userID } = props;

    // console.log('--------  explore section', typeof newChallengeData, newChallengeData.length > 0);
    let newChallengeComponents = [];
    if (typeof newChallengeData !== 'undefined' && newChallengeData.length > 0) {
        filtered_data = []
        newChallengeData.forEach(data => {
            participantList = data.participantList;
            if (!participantList.includes(userID)) {
                filtered_data.push(data)
            }
        })
        newChallengeComponents = filtered_data.map(data =>
            <NewChallengeCard challengeInfo={data} />
        )
    }

    return (
        <>
            <Layout style={styles.myChallengesHeader}>
                <Text style={styles.sectionTitle}>Explore</Text>
            </Layout>
            {/* <CategoryBar /> */}
            <ScrollView style={styles.exploreChallengesCardSection} showsHorizontalScrollIndicator={false}>
                {newChallengeComponents}
            </ScrollView>
        </>
    );
}

const HomeScreen = (props: Props) => {
    const [showMenuView, setShowMenuView] = useState(false);
    const { user, setUser } = useContext(AuthContext);
    const { newChallengeData, joinedChallengeData, joinedChallengeIDList } = props;

    console.log('------ newChallengeData in home screen', newChallengeData)
    // console.log('------ joinedChallengeData in home screen', joinedChallengeData)
    console.log('------ joinedChallengeIDList in home screen', joinedChallengeIDList)


    return (
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <HomeScreenHeader showMenuView={showMenuView} setShowMenuView={setShowMenuView} />
                <View style={styles.homeScreenBody}>
                    <MyChallengesSection joinedChallengeData={joinedChallengeData} joinedChallengeIDList={joinedChallengeIDList} />
                    <ExploreChallengesSection newChallengeData={newChallengeData} userID={user.uid} />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default HomeScreen;