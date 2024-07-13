import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LineChartElement from '../../components/design-system/LineChart/LineChartElement';

import StatisticsElement from '../../components/design-system/StatisticsElement/StatisticsElement';
import Color from '../../styles/constants/Colors';

import { useGetStatisticsDetailsElements } from '@/api/ressources/statistics-details/statisticsDetailsElement';

type RouteParams = {
    params: {
        id: number;
        date: string;
    };
};

const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function StatisticsDetailsScreen() {
    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { date, id } = route.params;
    const { data } = useGetStatisticsDetailsElements(id);

    const selectedDayFormatted = new Date(date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const raceStartTimeFormatted = new Date(date).toLocaleTimeString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
    });

    const averageSpeedData = data?.data.speeds[0].speeds;

    if (!averageSpeedData) {
        return null;
    }

    const linedata = {
        labels: averageSpeedData?.map(({ date }) =>
            new Date(date).toLocaleDateString('fr-FR', {
                second: 'numeric',
            })
        ),
        datasets: [
            {
                data: averageSpeedData?.map(({ speed }) => speed),
                strokeWidth: 1,
            },
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>{capitalizeFirstLetter(selectedDayFormatted)}</Text>
                </View>
                <View>
                    <Text style={styles.startTimeRace}>Commencé à {raceStartTimeFormatted}</Text>
                </View>

                <View>
                    <StatisticsElement />
                </View>
                <View>
                    <LineChartElement title="Vitesse Moyenne (m/s)" data={linedata} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16,
    },
    header: {
        marginTop: 32,
    },
    startTimeRace: {
        color: Color.greyText,
        marginTop: 8,
    },
    title: {
        color: Color.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
