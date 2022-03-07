import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    newChallengesContainer: {
        flex: 1,
        width: 180,
        height: 190,
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontFamily: 'Cabin-Regular',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 10,
    },
    newChallengesImage: {
        height: 110,
        width: 150,
        borderRadius: 6,
    },
    newChallengesTitle: {
        height: 20,
        width: 180,
        flexShrink: 1,
        paddingTop: 7,
    },
    statusSection: {
        flexDirection: 'row',
        alignContent: 'center',
        height: 30,
        paddingTop: 10,
    },
    joinedChallengesCheckInTitle: {
        height: 20,
        width: 122,
    },


});

const NewChallengeCard = () => {
    var checkedInStatus = true;
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.newChallengesContainer}>
                <Image style={styles.newChallengesImage} source={require('../Assets/Images/running.jpeg')} />
                <Text style={styles.newChallengesTitle}>Running 5km in two weeks rrrr</Text>
            </Layout>
        </ApplicationProvider>
    );
}

export default NewChallengeCard;