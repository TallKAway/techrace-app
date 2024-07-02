import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useGetStatisticsDetails } from '../../api/ressources/statistics-details/statisticsDetails';
import StatisticsElement from '../../components/design-system/StatisticsElement';

import Color from '../../styles/constants/Colors';

export default function CarRaceStatisticDetails() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetStatisticsDetails hook
    const { data } = useGetStatisticsDetails();
    console.log(data);

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
