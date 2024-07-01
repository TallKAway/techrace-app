import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Color from '@/styles/constants/Colors';

export default function StatisticsElement() {
    return (
        <View style={styles.container}>
            <View style={styles.titleStatsElement}>
                <Text style={styles.titleElement}>Temps</Text>
                <Text style={styles.valueStatsElement}>8min</Text>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.titleStatsElement}>
                <Text style={styles.titleElement}>Distance</Text>
                <Text style={styles.valueStatsElement}>320m</Text>
            </View>
            <View style={styles.separator}></View>
            <View style={styles.titleStatsElement}>
                <Text style={styles.titleElement}>Vitesse Max</Text>
                <Text style={styles.valueStatsElement}>15m/s</Text>
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
        width: 1,
    },
    titleElement: {
        fontSize: 12,
    },
    titleStatsElement: {
        alignItems: 'center',
        color: Color.greyText,
        fontSize: 11,
        marginLeft: 10,
        marginRight: 10,
    },
    valueStatsElement: {
        color: Color.greyText,
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
    },
});
