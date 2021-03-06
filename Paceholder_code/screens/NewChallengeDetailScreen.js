import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Route from '../components/navigation/Route';

const styles = StyleSheet.create({
    navigationContainer: {
        width: 340,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 50,
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        width: 30,
        height: 30,
    },
    navButtons: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 6,
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
        width: 115,
        height: 44,
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#ffbf69',
        marginLeft: 260,
        marginTop: 210,
        borderRadius: 10,
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
    checkInButton: {
        width: 115,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    challengeDetailTitle: {
        height: 28,
        width: 340,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 25,
        fontSize: 22,
        fontFamily: 'RobotoCondensed-Bold',
    },
    challengeDetailDescription: {
        height: 80,
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
        height: 30,
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

// const pressedCheckIn = () => {
//     const navigation = useNavigation();
//     navigation.navigate("JoinedChallengeScreen")
// }

const NewChallengeDetailScreen = ({route}) => {
    var checkedInStatus = true;
    const navigation = useNavigation();
    const {data} = route.params;
    const challengeInfo = data;

    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.navigationContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Icon name={"arrow-left"} size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.navButtons} name="menu" size={30} />
                </TouchableOpacity>
            </Layout>
            <ScrollView>
                <Layout style={styles.checkInContainer}>
                    <TouchableOpacity
                        style={styles.checkInButton}
                        onPress={() => {
                            navigation.navigate("JoinedChallengeScreen")
                        }
                        }
                    >
                        <Text style={styles.checkInText}>Join Challenge</Text>
                    </TouchableOpacity>
                </Layout>
                <Layout style={styles.challengeDetailContainer}>
                    {/* back button and menu button*/}
                    <Image style={styles.challengeDetailImage} source={require('../Assets/Images/running.jpeg')} />
                    <Text style={styles.challengeDetailTitle}>{challengeInfo.challengeName}</Text>
                    <Text style={styles.challengeDetailDescription}>{challengeInfo.challengeDescription}</Text>
                    {/* <Text style={styles.challengeDetailInformation}>Start Date: {challengeInfo.startDate}</Text>
                    <Text style={styles.challengeDetailInformation}>End Date: {challengeInfo.endDate}</Text> */}
                    <Text style={styles.challengeDetailInformation}>People Joined: {challengeInfo.participantList.length} </Text>
                </Layout>
            </ScrollView>
        </ApplicationProvider>
    );
}

export default NewChallengeDetailScreen;