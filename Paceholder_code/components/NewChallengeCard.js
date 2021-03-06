import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    newChallengesContainer: {
        flex: 1,
        width: 390,
        height: 110,
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: 'Cabin-Regular',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 15,
    },
    newChallengesImage: {
        height: 110,
        width: 150,
        borderRadius: 6,
    },
    newChallengesInfoSection: {
        height: 110,
        flexDirection: 'column',
        marginLeft: 17,
    },
    newChallengesTitle: {
        width: 195,
        height: 45,
        marginTop: 8,
        fontSize: 15,
        fontFamily: 'RobotoCondensed-Bold',
    },
    newChallengesAudienceTitle: {
        height: 22,
        width: 180,
        fontSize: 13,
        color: '#676767',
    },
    newChallengestagTitle: {
        height: 27,
        width: 180,
        marginTop: 6,
        fontSize: 13,
        color: '#E58400',
        bottom: 0,
    },


});

// @flow
type Props = Readonly<{
    challengeInfo: Array,
}>;

const NewChallengeCard = (props: Props) => {
    const navigation = useNavigation();
    const { challengeInfo } = props;

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("NewChallengeScreen", {
                        screen: 'NewChallengeScreen',
                        data: challengeInfo 
                        
                    })
                    console.log('------------------ on press',challengeInfo)
                }
                }>
                <Layout style={styles.newChallengesContainer}>
                    <Image style={styles.newChallengesImage} source={require('../Assets/Images/running.jpeg')} />
                    <Layout style={styles.newChallengesInfoSection}>
                        <Text style={styles.newChallengesTitle}>{challengeInfo.challengeName}</Text>
                        {/* <Text style={styles.newChallengesAudienceTitle}>{challengeInfo.participantList.length}</Text> */}
                        <Text style={styles.newChallengestagTitle}>{challengeInfo.challengeDescription}</Text>
                    </Layout>
                </Layout>
            </TouchableOpacity>

        </ApplicationProvider>
    );
}

export default NewChallengeCard;