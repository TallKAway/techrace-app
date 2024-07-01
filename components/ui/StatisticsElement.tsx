import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import Color from '@/styles/constants/Colors';

export default function StatisticsElement() {
    return (
        <View style={styles.container}>
            <View style={styles.statsElement}>
                <Text style={styles.titleElement}>Temps</Text>
                <Text style={styles.textElement}>8min</Text>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.statsElement}>
                <Text style={styles.titleElement}>Distance</Text>
                <Text style={styles.textElement}>320m</Text>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.statsElement}>
                <Text style={styles.titleElement}>Vitesse Max</Text>
                <Text style={styles.textElement}>15m/s</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 32,
        padding: 16,
    },
    separator: {
        backgroundColor: Color.greyText,
        height: '100%',
        marginLeft: 16,
        marginRight: 16,
        width: 2,
    },
    statsElement: {
        alignItems: 'center',
    },
    textElement: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    titleElement: {
        fontSize: 12,
    },
});
