import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

import JoinedChallengeCard from '../components/JoinedChallengeCard';
import NewChallengeCard from '../components/NewChallengeCard';
import CategoryBar from '../components/CategoryBar';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    myChallengesContainer: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontFamily: 'RobotoCondensed-Bold',
        marginLeft: 20,
    },
    myChallengesMenuButton: {
        marginRight: 20,
    },
    myChallengesCardSection: {
        height: 195,
        marginTop: 16,
    },
    exploreChallengesCardSection: {
        marginTop: 5,
    }

});

const MyChallengesSection = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>

            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>My Challenges</Text>
                <Icon style={styles.myChallengesMenuButton} name="menu" size={20} />
            </Layout>
            <ScrollView style={styles.myChallengesCardSection} horizontal={true} showsHorizontalScrollIndicator={false}>
                <JoinedChallengeCard />
                <JoinedChallengeCard />
                <JoinedChallengeCard />
            </ScrollView>
        </ApplicationProvider>
    );
}

const ExploreChallengesSection = () => {
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <Layout style={styles.myChallengesContainer}>
                <Text style={styles.sectionTitle}>Explores</Text>
            </Layout>
            <CategoryBar />
            <ScrollView style={styles.exploreChallengesCardSection} showsHorizontalScrollIndicator={false}>
                <NewChallengeCard />
                <NewChallengeCard />
                <NewChallengeCard />
            </ScrollView>
        </ApplicationProvider>
    );
}

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <ScrollView>
                <MyChallengesSection />
                <ExploreChallengesSection />
            </ScrollView>
        </View>

    );
}

export default HomeScreen;