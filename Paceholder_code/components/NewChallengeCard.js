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

const NewChallengeCard = () => {
    var checkedInStatus = true;
    const navigation = useNavigation();

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <TouchableOpacity
                onPress={() => navigation.navigate("NewChallengeDetailScreen")}>
                <Layout style={styles.newChallengesContainer}>
                    <Image style={styles.newChallengesImage} source={require('../Assets/Images/running.jpeg')} />
                    <Layout style={styles.newChallengesInfoSection}>
                        <Text style={styles.newChallengesTitle}>Push/ pull/ legs 3 days a week</Text>
                        <Text style={styles.newChallengesAudienceTitle}>Joined: 100+</Text>
                        <Text style={styles.newChallengestagTitle}>“Great beginner workout!”</Text>
                    </Layout>
                </Layout>
            </TouchableOpacity>

        </ApplicationProvider>
    );
}

export default NewChallengeCard;