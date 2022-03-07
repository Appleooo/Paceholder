import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    newChallengesContainer: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: 'Cabin-Regular',
        fontSize: 15,
        marginLeft: 20,
        marginRight: 10,
        marginTop: 15,
    },
    categoryTabContainer: {
        flexDirection: 'row',
        padding: 7,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 7,
    },
    categoryIcon: {
        fontSize: 16,
    },
    categoryTitle: {
        fontFamily: 'RobotoCondensed-Bold',
        fontSize: 15,
        marginLeft: 5,
    },
    

});

const CategoryTab = (data) => {
    return (
        <View style={styles.categoryTabContainer}>
            <Icon style={styles.categoryIcon} name="running" size={20} />
            <Text style={styles.categoryTitle}>Running</Text>
        </View>
    );
}

const CategoryBar = () => {
    var checkedInStatus = true;
    return (
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Layout style={styles.newChallengesContainer}>
                    <CategoryTab />
                </Layout>
            </ScrollView>
        </ApplicationProvider>
    );
}

export default CategoryBar;