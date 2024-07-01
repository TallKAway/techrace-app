import React from 'react';
import Color from '@/styles/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

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
        marginTop: 32,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    statsElement: {
        alignItems: 'center',
    },
    titleElement: {
        fontSize: 12,
    },
    textElement: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    separator: {
        height: '100%',
        width: 2,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: Color.greyText,
    },
});
