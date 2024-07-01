import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '@/styles/constants/Colors';
import { useGetStatisticsDetails } from '@/api/ressources/statisticsDetails/statisticsDetails';

export default function StatisticsElement() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetStatisticsDetails hook
    const { data } = useGetStatisticsDetails();
    console.log(data);

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
    titleStatsElement: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 11,
        color: Color.greyText,
        alignItems: 'center',
    },
    valueStatsElement: {
        marginLeft: 10,
        marginRight: 10,
        color: Color.greyText,
        fontSize: 22,
        fontWeight: 'bold',
    },
    titleElement: {
        fontSize: 12,
    },
});
