import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

import Icon from 'react-native-vector-icons/Feather';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flexWrap: 'wrap',
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
        width: 230,
        height: 47,
        backgroundColor: '#FFBF69',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },
    createButtonTitle: {
        fontFamily: 'Cabin-Regular',
        fontSize: 18,
        fontWeight: 'bold',
    }

});

const CreationScreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <Image style={styles.creationImage} source={require('../Assets/Images/running.jpeg')} />

            <ScrollView style={styles.container} persistentScrollbar={true}>
                <Text style={styles.creationText}>Create New Challenges</Text>
                <Text style={styles.creationTitle}>Challenge Name</Text>
                <TextInput
                    style={styles.fieldText}
                    placeholder={"Enter Your Challenge Name Here"}
                    placeholderTextColor='#4B4B4B'
                    onChangeText={text => handleChange(text)} />
                <Text style={styles.creationTitle}>Description</Text>
                <TextInput
                    style={{ height: 80, ...styles.fieldText }}
                    placeholder={"Enter Your Challenge Name Here"}
                    placeholderTextColor='#4B4B4B'
                    multiline={true}
                    onChangeText={text => handleChange(text)} />

                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Start Date</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"MM/DD/YYYY"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => handleChange(text)} />
                    </View>

                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>End Date</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"MM/DD/YYYY"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => handleChange(text)} />
                    </View>

                </View>
                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Goals in number</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"e.g. 5"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => handleChange(text)} />
                    </View>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Unit</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"Frequency"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => handleChange(text)} />
                    </View>
                </View>


                <View style={styles.subsectionContainer}>
                    <View style={styles.subsection}>
                        <Text style={styles.creationTitle}>Type</Text>
                        <TextInput
                            style={styles.fieldText}
                            placeholder={"e.g. Running"}
                            placeholderTextColor='#4B4B4B'
                            onChangeText={text => handleChange(text)} />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.createButton}
                    onPress={() => { }}>
                    <Text style={styles.createButtonTitle}>Create Challenge</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

export default CreationScreen;