import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Menu, MenuItem, Text } from '@ui-kitten/components';
import { ApplicationProvider, Layout, Avatar } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { AuthContext } from './navigation/AuthProvider';


const styles = StyleSheet.create({
    menuContainer: {
        width: 100,
        backgroundColor: '#4B4B4B',
        position: 'absolute',
        right: 5,
        top: 10,
        borderRadius: 10,
        shadowColor: "grey",
        shadowOpacity: 0.6,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        zIndex: 1000000,
    },
    menu: {
        borderRadius: 10,
    },

});

type Props = Readonly<{
    showMenuView: Boolean,
    setShowMenuView: Boolean,
}>;

const MenuNoMarkersShowcase = (props: Props) => {
    const { logout } = useContext(AuthContext);
    const { showMenuView, setShowMenuView } = props;

    return (

        showMenuView ?
            <ApplicationProvider
                mapping={mapping}
                theme={lightTheme}>
                < React.Fragment >
                    <View style={styles.menuContainer}>
                        <Menu style={styles.menu} >
                            <MenuItem title='Logout' onPress={() => logout()} />
                            <MenuItem title='Cancel' onPress={() => setShowMenuView(false)} />
                        </Menu>
                    </View>
                </React.Fragment >
            </ApplicationProvider >
            : null

    );
};

export default MenuNoMarkersShowcase;