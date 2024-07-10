import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { ChevronIcon } from '../icons/ChevronIcon';
import { StatisticsIcon } from '../icons/StatisticsIcon';

import { Race } from '@/api/ressources/races/types';
import { ScreenStackNavigatorProps } from '@/app/domains/navigation';
import Colors from '@/styles/constants/Colors';

interface StatisticsSummaryCardProps {
    race: Race;
}

export default function StatisticsSummaryCard({ race }: StatisticsSummaryCardProps) {
    const navigation = useNavigation<ScreenStackNavigatorProps>();

    const startDate = new Date(race.start_Time).getTime();
    const endDate = new Date(race.end_Time).getTime();
    const raceTime = endDate - startDate;

    const raceTimeMinutes = raceTime / (1000 * 60);
    const raceDistanceMeter = race.distance / 100;

    return (
        <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('StatisticsDetails')}
            underlayColor="white"
        >
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <View style={styles.icon}>
                        <StatisticsIcon />
                    </View>
                    <View>
                        <Text style={styles.date}>{race.timestamp}</Text>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>Temps de course : {raceTimeMinutes} min</Text>
                            <Text style={styles.text}>
                                Distance parcourue : {raceDistanceMeter} m
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <ChevronIcon />
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primaryLight20,
        borderRadius: 13,
        marginBottom: 16,
        padding: 16,
        width: '100%',
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
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
