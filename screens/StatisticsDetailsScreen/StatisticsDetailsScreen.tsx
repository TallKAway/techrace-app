import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import LineChartElement from '../../components/design-system/LineChart/LineChartElement';

import StatisticsElement from '../../components/design-system/StatisticsElement/StatisticsElement';
import Color from '../../styles/constants/Colors';

type RouteParams = {
    params: {
        id: number;
        date: string;
    };
};

export default function StatisticsDetailsScreen() {
    const route = useRoute<RouteProp<RouteParams, 'params'>>();
    const { date } = route.params;

    const selectedDay = new Date(date).toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    
    // TODO : Récuperer les données depuis l'API data from te API, c'est un exemple de ce que peut renvoyer le hook useGetStatisticsDetails. Remplacer lineData par les données récupérées dans data
    const linedata = {
        labels: ['00:00', '05:00', '10:00', '15:00', '20:00', '25:00'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 1,
            },
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>{capitalizeFirstLetter(selectedDay)}</Text>
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
    title: {
        color: Color.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
});
