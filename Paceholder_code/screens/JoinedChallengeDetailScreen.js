import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Dimensions, Modal, Pressable } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
        width: 84,
        height: 44,
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#ffbf69',
        marginLeft: 290,
        marginTop: 210,
        borderRadius: 10,
    },
    challengeDetailImage: {
        alignContent: 'stretch',
        width: width,
        height: 230,
        borderRadius: 6,
    },
    checkInText: {
        fontSize: 15,
        fontFamily: 'Cabin-Regular_Medium',
    },
    checkInButton: {
        width: 84,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    checkinModal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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

const pressedCheckIn = () => {

}

const JoinedChallengeDetailScreen = () => {
    var checkedInStatus = true;
    const navigation = useNavigation();
    const challengeInfo = require('../data/joinedChallenge.json');

    const [modalVisible, setModalVisible] = useState(false);
    const [startEndDates, setStartEndDates] = useState(["2022-04-11", "2022-04-18"])
    const startingDate = challengeInfo.startDate;
    const endingDate = challengeInfo.endDate;
    var markedDatesDict = {};
    markedDatesDict[challengeInfo.startDate] = { startingDay: true, color: 'green', endingDay: true };
    for (var date of challengeInfo.checkedinList) {
        markedDatesDict[date] = { startingDay: true, color: 'orange', endingDay: true };
    }
    firestore().collection('joinedChallenges').doc("GJemMnYLodC3P6OaywYB").get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data());
            }
            else {
                console.log('Error: Data does not exist');
            }
        });
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(false);
                }}
            >
                <View style={styles.checkinModal}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                            >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.checkInText}>Check-in</Text>
                    </TouchableOpacity>
                </Layout>
                <Layout style={styles.challengeDetailContainer}>
                    {/* back button and menu button*/}
                    <Image style={styles.challengeDetailImage} source={require('../Assets/Images/running.jpeg')} />
                    <Text style={styles.challengeDetailTitle}>{challengeInfo.name}</Text>
                    <Text style={styles.challengeDetailDescription}>{challengeInfo.challengeDescription}</Text>
                    {showCheckInStatus(checkedInStatus)}
                    <Text style={styles.challengeDetailInformation}>Start Date: {challengeInfo.startDate}</Text>
                    <Text style={styles.challengeDetailInformation}>End Date: {challengeInfo.endDate}</Text>
                    <Text style={styles.challengeDetailInformation}>People Joined: {challengeInfo.participantList.length} </Text>
                </Layout>
                <Calendar
                    // Initially visible month. Default = now
                    current={startingDate}
                    minDate={startingDate}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={endingDate}
                    disableAllTouchEventsForDisabledDays={true}
                    onDayPress={day => {
                        // console.log('selected day', day);
                    }}
                    // disableArrowLeft={true}
                    // disableArrowRight={true}
                    theme={{
                        todayTextColor: '#ffbf69',
                    }}
                    markingType={'period'}
                    markedDates={markedDatesDict}
                // markedDates={{
                //     startDate: {startingDay: true, color: 'green', endingDay: true}
                // }}
                />
            </ScrollView>
        </ApplicationProvider>
    );
}

export default JoinedChallengeDetailScreen;