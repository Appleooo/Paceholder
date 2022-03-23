import React from "react";
import { View, StyleSheet, ScrollView } from 'react-native';

import ChallengeDetailScreen from '../screens/ChallengeDetailScreen';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.body}>
            <ChallengeDetailScreen />
        </View>
    );
}

export default ProfileScreen;