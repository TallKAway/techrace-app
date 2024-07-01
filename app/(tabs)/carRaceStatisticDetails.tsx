import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StatisticsElement from '@/components/ui/StatisticsElement';
import Color from '@/styles/constants/Colors';

export default function CarRaceStatisticDetails() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Mardi 19 Mai 2024</Text>
            </View>
            <View>
                <StatisticsElement />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
    },
    header: {
        marginTop: 32,
    },
    title: {
        color: Color.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
