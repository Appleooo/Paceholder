import React from 'react';
import { View, TouchableOpacity, Text, useRef, StyleSheet } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { Host, Portal } from 'react-native-portalize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

const CreationModal = () => {
    // ref
    const bottomSheetModalRef = useRef < BottomSheetModal > (null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <View style={styles.container}>
            {/* <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet> */}
        </View>
    );
}

export default CreationModal;

