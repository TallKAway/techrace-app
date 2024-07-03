import { StyleSheet, View, Text } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';
import StatisticsSummaryCard from '@/components/design-system/StatisticsSummaryCard/StatisticsSummaryCard';
import Colors from '@/styles/constants/Colors';

export default function StatisticsSummaryScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <Badge status="Connecté" />
            </View>
            <View style={styles.graphContainer}>
                <Text style={styles.graphTitle}>Nombre de courses effectuées</Text>
                {/* TODO: Ajouter le graphique ici quand on aura choisi la lib */}
                <Text>Mettre le graphique ici</Text>
            </View>
            {/* TODO: map les infos selon la date quand on aura les données */}
            <View style={styles.cardContainer}>
                <Text style={styles.date}>Aujourd'hui</Text>
                <StatisticsSummaryCard />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    date: {
        color: Colors.greyText,
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 8,
    },
    graphContainer: {
        flex: 2,
    },
    graphTitle: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    statusContainer: {
        alignItems: 'flex-end',
        flex: 1,
    },
});
