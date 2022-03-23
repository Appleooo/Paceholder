import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    navigationContainer: {
        width: 340,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        position:'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 40,
    },
    challengeDetailContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        fontFamily: 'Cabin-Regular',
        fontSize: 16,
    },
    checkInContainer: {
        width: 84,
        height: 44,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute',
        zIndex: 1,
        backgroundColor: '#ffbf69',
        marginLeft: 290,
        marginTop: 210,
    },
    challengeDetailImage: {
        alignContent: 'stretch',
        width: 390,
        height: 232,
        borderRadius: 6,
    },
    checkInText: {
        fontSize: 15,
        fontFamily: 'Cabin-Regular_Medium',
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
            <Layout style={styles.navigationContainer}>
                <Icon name="arrow-left" size={30} />
                <Icon name="menu" size={30} />
            </Layout>
            <ScrollView>
            <Layout style={styles.checkInContainer}>
                <Text style={styles.checkInText}>Check-in</Text>
            </Layout>
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
            </ScrollView>
        </ApplicationProvider>
    );
}

export default ChallengeDetailScreen;