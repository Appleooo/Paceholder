import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
        height: 25,
        width: 180,
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

type Props = Readonly<{
    challengeInfo: Array,
}>;

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

const JoinedChallengeCard = (props: Props) => {
    var checkedInStatus = true;
    const navigation = useNavigation();
    const { challengeInfo } = props;

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("JoinedChallengeScreen", {
                        data: challengeInfo
                    })
                }}>
                <Layout style={styles.joinedChallengesContainer}>
                    <Image style={styles.joinedChallengesImage} source={require('../Assets/Images/running.jpeg')} />
                    <Text style={styles.joinedChallengesTitle}>{challengeInfo.challengeName}</Text>
                    {/* {showCheckInStatus(checkedInStatus)} */}
                </Layout>
            </TouchableOpacity>

        </ApplicationProvider>
    );
}

export default JoinedChallengeCard;