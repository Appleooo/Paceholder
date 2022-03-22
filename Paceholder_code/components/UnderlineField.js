import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import { ApplicationProvider, Autocomplete, Layout } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
    fieldContainer: {
        width: '100%',
        height: 40,
        width: 310,
        flexDirection: 'row',
        borderBottomColor: 'black',
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    text: {
        fontFamily: 'Cabin-Regular',
        fontSize: 15,
        marginLeft: 15,
    },

});

// @flow
type Props = Readonly<{
    iconName: string,
    title: string,
}>;

const UnderlineField = (props: Props) => {
    const {iconName, title} = props;
    return (
        <View style={styles.fieldContainer} >
            <Icon name={iconName} size={20} />
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default UnderlineField;