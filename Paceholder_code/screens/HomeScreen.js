import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Avatar } from '@ui-kitten/components';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    body: {
        backgroundColor: '#FFFFFF',
    },
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 8,
    },

});



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
        </View>
    );
}

export default HomeScreen;