import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    challengeDetailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: 'Cabin-Regular',
        fontSize: 16,
    },
    challengeDetailImage: {
        alignContent: 'stretch',
        width: 390,
        height: 232,
        borderRadius: 6,
    },
    challengeDetailTitle: {
        height: 28,
        width: 340,
        marginTop: 20,
        marginLeft: 25,
        fontSize: 22,
        fontFamily: 'RobotoCondensed-Bold',
    },
    challengeDetailDescription: {
        height: 55,
        width: 340,
        marginLeft: 25,
        fontSize: 16,
        color: '#676767',
        flexWrap: 'wrap',
    },
    statusSection: {
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 25,
        height: 30,
    },
    challengeDetailCheckInTitle: {
        height: 20,
        width: 122,
    },
    challengeDetailInformation: {
        height: 90,
        width: 340,
        marginLeft: 25,
        fontSize: 16,
    },


});
function showCheckInStatus(checkedInStatus) {
    if (checkedInStatus) {
        return (
            <View style={styles.statusSection}>
                <Text style={styles.challengeDetailCheckInTitle}>Checked-in Today</Text>
                <Icon name="check-circle" size={16} color='#E3890D' />
            </View>
        );
    }
}

const ChallengeDetailScreen = () => {
    var checkedInStatus = true;
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Icon style={styles.myChallengesMenuButton} name="menu" size={20} />
            <Layout style={styles.challengeDetailContainer}>
                {/* back button and menu button*/}
                <Image style={styles.challengeDetailImage} source={require('../Assets/Images/running.jpeg')} />
                <Text style={styles.challengeDetailTitle}>Running 5 mi in two weeks</Text>
                <Text style={styles.challengeDetailDescription}>Getting started with running! Go for a few shorter runs over
                two weeks and get to 5 miles!</Text>
                {showCheckInStatus(checkedInStatus)}
                <Text style={styles.challengeDetailInformation}>Start Date: 03/01/2022 {"\n"}End Date: 03/15/2022 {"\n"}
                People Joined: 150+ </Text>
            </Layout>
        </ApplicationProvider>
    );
}

export default ChallengeDetailScreen;