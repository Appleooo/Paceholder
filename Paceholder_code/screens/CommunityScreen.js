import React from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
    },
})

const CommunityScreen = ({navigation}) => {
    return (
        <View style={styles.body}>
            <Text>Community Page</Text>
        </View>
    );
}

export default CommunityScreen;