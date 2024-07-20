import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Color from '../../../styles/constants/Colors';

import { useGetStatisticsDetailsElements } from '@/api/ressources/statistics-details/statisticsDetailsElement';

type RouteParams = {
    params: {
        id: number;
    };
};

export default function StatisticsElement() {
    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { id } = route.params;
    const { data } = useGetStatisticsDetailsElements(id);

    const raceStatById = data?.data;
    if (!raceStatById) return null;

    const startDate = new Date(raceStatById.start_Time).getTime();
    const endDate = new Date(raceStatById.end_Time).getTime();
    const raceTime = endDate - startDate;

    // Convertir la différence en minutes
    const raceTimeMinutes = raceTime / (1000 * 60);

    const distanceMeter = raceStatById.distance / 100;

    const maxSpeed = raceStatById.speeds[0].max_Speed;

    const batteryConsumption = raceStatById?.battery[0]?.battery_consumed;

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.titleStatsElement}>
                    <Text style={styles.titleElement}>Temps(min)</Text>
                    <Text style={styles.valueStatsElement}>{raceTimeMinutes}</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.titleStatsElement}>
                    <Text style={styles.titleElement}>Distance(m)</Text>
                    <Text style={styles.valueStatsElement}>{distanceMeter}</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.titleStatsElement}>
                    <Text style={styles.titleElement}>Vitesse Max</Text>
                    <Text style={styles.valueStatsElement}>{maxSpeed}</Text>
                </View>
                <View style={styles.separator}></View>
                <View style={styles.titleStatsElement}>
                    <Text style={styles.titleElement}>Batterie Cons. (%)</Text>
                    <Text style={styles.valueStatsElement}>
                        {batteryConsumption ? batteryConsumption : '-'}
                    </Text>
                </View>
            </View>
        </ScrollView>
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
        width: 0.5,
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
