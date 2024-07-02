import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { StatisticsIcon } from '../icons/StatisticsIcon';

import Colors from '@/styles/constants/Colors';

interface StatisticsSummaryCardProps {}

export default function StatisticsSummaryCard({}: StatisticsSummaryCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <StatisticsIcon />
            </View>
            <View>
                <Text style={styles.date}>19/05/2024 - 10h26</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Temps de course : 8min</Text>
                    <Text style={styles.text}>Distance parcourue : 320m</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryLight20,
        borderRadius: 13,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        padding: 16,
        width: '100%',
    },
    date: {
        color: Colors.greyText,
        fontSize: 14,
        paddingBottom: 8,
    },
    icon: {
        backgroundColor: Colors.secondary,
        borderRadius: 6,
        flexShrink: 0,
        height: 32,
        width: 32,
    },
    text: {
        color: Colors.text,
        fontSize: 16,
    },
    textContainer: {
        gap: 4,
    },
});
