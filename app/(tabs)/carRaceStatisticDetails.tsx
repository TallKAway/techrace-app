import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CarRaceStatisticDetails() {
    return (
        <View style={styles.container}>
            <Text>Car Race Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
