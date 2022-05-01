import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';

import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from "../components/navigation/AuthProvider";
import firestore from '@react-native-firebase/firestore';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        display: 'flex',
    },
    creationImage: {
        width: width,
        height: 330,
    },
    backButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        width: 30,
        height: 30,
        marginTop: 47,
    },
    creationText: {
        width: width,
        fontSize: 24,
        fontFamily: 'RobotoCondensed-Bold',
        paddingBottom: 5,
        textAlign: 'left',
        marginBottom: 10,
        zIndex: 1000,
        top: 220,
        left: 20,
        position: 'absolute',
        color: 'white',
    },
    container: {
        width: width,
        height: 700,
        borderRadius: 25,
        marginTop: -70,
        zIndex: 100,
        backgroundColor: 'white',
        padding: 25,
    },
    creationTitle: {
        fontSize: 18,
        fontFamily: 'Cabin-Regular',
        fontWeight: 'bold',
        marginBottom: 7,
    },
    fieldText: {
        fontFamily: 'Cabin-Regular',
        fontSize: 15,
        fontWeight: 'bold',
        width: '100%',
        borderColor: 'grey',
        borderWidth: 0.3,
        marginBottom: 13,
        borderRadius: 6,
        padding: 10,
    },
    subsectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subsection: {
        width: (width - 80) / 2,
    },
    createButton: {
        width: width - 50,
        height: 47,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 50,
    },
    createButtonTitle: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        fontWeight: 'bold',
    }

});
const showEmptyAlert = () => {
    Alert.alert(
        "Empty Fields",
        "At least one field is empty",
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
}

const showDateAlert = (dateType) => {
    Alert.alert(
        "Invalid " + dateType,
        "Format YYYY-MM-DD",
        [
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
    );
}

const handleOnPress = (challengeList, setChallengeList, name, description, startDate, endDate, goal, unit, type, userID) => {


    // check empty
    if (name == "" || description == "" || startDate == "" || endDate == "" || goal == "" || unit == "" || type == "") {
        showEmptyAlert();
        return;
    }
    startDateSplit = startDate.split('-');
    endDateSplit = endDate.split('-');
    // check date
    if (startDateSplit.length < 3 || startDateSplit[0].length != 4) {
        showDateAlert('startDate');
        return;
    }
    if (endDateSplit.length < 3 || endDateSplit[0].length != 4) {
        showDateAlert('endDate');
        return;
    }

    // write joined private challenge to firestore
    const joinedChallengeRef = firestore().collection('joinedChallenges')
    joinedChallengeRef
        .add({
            challengeName: name,
            challengeDescription: description,
            startDate,
            endDate,
            goal,
            type,
            unit,
            userProgress: 0,
            checkinList: [],
            participantList: [userID],
        })
        .then((docRef) => {
            updateUserChallengeList(docRef.id, userID, challengeList, setChallengeList);
            updateID(docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    // console.log(name, description, startDate, endDate, goal, unit, type, userID)
}

const updateID = (challengeID) => {
    const joinedChallengeRef = firestore().collection('joinedChallenges')
    joinedChallengeRef
        .doc(challengeID)
        .update({
            id: challengeID
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// add challenge uniqe id to joinedChallengeList
const updateUserChallengeList = (challengeID, userID, challengeList, setChallengeList) => {
    firestore().collection('joinedChallenges')
        .doc(challengeID)
        .update({
            id: challengeID,
        })
        .then(() => {
            console.log('challenge id updated!');
        });
    const usereRef = firestore().collection('users')
    usereRef
        .doc(userID)
        .get()
        .then(documentSnapshot => {
            if (documentSnapshot.exists) {
                setChallengeList(documentSnapshot.data().joinedChallengeList)
            }
            else {
                console.log('Error: Data does not exist');
            }
        });
    setChallengeList(challengeList.push(challengeID))
    // console.log('list: ', challengeList)
    usereRef
        .doc(userID)
        .update({
            joinedChallengeList: challengeList,
        })
        .then(() => {
            console.log('User updated!');
        });
}

const CreationScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [goal, setGoal] = useState("");
    const [unit, setUnit] = useState("");
    const [type, setType] = useState("");
    const [challengeList, setChallengeList] = useState("");



    const { user, setUser } = useContext(AuthContext);
    // console.log('user id: ',  user.uid)


    return (
        <View style={styles.body}>
            <Image style={styles.creationImage} source={require('../Assets/Images/running.jpeg')} />
            <Text style={styles.creationText}>Create New Challenges</Text>
            <ScrollView style={styles.container} persistentScrollbar={true}>
                <Text style={styles.creationTitle}>Challenge Name</Text>
                <TextInput
                    style={styles.fieldText}
                    placeholder={"Enter Your Challenge Name Here"}
                    placeholderTextColor='#4B4B4B'
                    onChangeText={text => setName(text)} />
                <Text style={styles.creationTitle}>Description</Text>
                <TextInput
                    style={{ height: 80, ...styles.fieldText }}
                    placeholder={"Enter Your Challenge Name Here"}
                    placeholderTextColor='#4B4B4B'
                    multiline={true}
                    onChangeText={text => setDescription(text)} />
                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Start Date</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"YYYY-MM-DD"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => setStartDate(text)} />
                    </View>

                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>End Date</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"YYYY-MM-DD"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => setEndDate(text)} />
                    </View>

                </View>
                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Goals in number</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"e.g. 5"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => setGoal(text)} />
                    </View>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Unit</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"e.g. times/kg/miles"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => setUnit(text)} />
                    </View>
                </View>


                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Type</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"e.g. Running"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => setType(text)} />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.createButton}
                    onPress={() => handleOnPress(challengeList, setChallengeList, name, description, startDate, endDate, goal, unit, type, user.uid)}>
                    <Text style={styles.createButtonTitle}>Create Challenge</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default CreationScreen;