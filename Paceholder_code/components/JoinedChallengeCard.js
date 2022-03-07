import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image } from 'react-native';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    joinedChallengesContainer: {
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
    joinedChallengesImage: {
        height: 130,
        width: 180,
        borderRadius: 6,
    },
    joinedChallengesTitle: {
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
function showCheckInStatus(checkedInStatus) {
    if (checkedInStatus) {
        return (
            <View style={styles.statusSection}>
                <Text style={styles.joinedChallengesCheckInTitle}>Checked-in Today</Text>
                <Icon name="check-circle" size={16} color='#E3890D' />
            </View>
        );
    }
}

const JoinedChallengeCard = () => {
    var checkedInStatus = true;
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.joinedChallengesContainer}>
                <Image style={styles.joinedChallengesImage} source={require('../Assets/Images/running.jpeg')} />
                <Text style={styles.joinedChallengesTitle}>Running 5km in two weeks rrrr</Text>
                {showCheckInStatus(checkedInStatus)}

            </Layout>
        </ApplicationProvider>
    );
}

export default JoinedChallengeCard;