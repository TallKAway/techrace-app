import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useGetStatisticsDetails } from '../../api/ressources/statistics-details/statisticsDetails';
import LineChartElement from '../../components/design-system/LineChart/LineChartElement';
import StatisticsElement from '../../components/design-system/StatisticsElement/StatisticsElement';

import Color from '../../styles/constants/Colors';

import { ScreenStackBottomNavigatorProps } from '@/app/domains/navigation';

export default function CarRaceStatisticDetails() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetStatisticsDetails hook
    const { data } = useGetStatisticsDetails();
    console.log(data);

    // TODO : Récuperer les données depuis l'API data from the API, c'est un exemple de ce que peut renvoyer le hook useGetStatisticsDetails. Remplacer lineData par les données récupérées dans data
    const linedata = {
        labels: ['00:00', '05:00', '10:00', '15:00', '20:00', '25:00'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 1, // optional
            },
        ],
    };

    const navigation = useNavigation<ScreenStackBottomNavigatorProps>();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>Mardi 19 Mai 2024</Text>
                </View>
                <View>
                    <StatisticsElement />
                </View>
                <View>
                    <LineChartElement title="Vitesse Moyenne (m/s)" data={linedata} />

                    <Button
                        title="Go to Summary"
                        onPress={
                            // TODO : Ajouter ici la navigation vers la page de Car Race Détails
                            () => navigation.navigate('CarRaceNavigator')
                        }
                    />
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