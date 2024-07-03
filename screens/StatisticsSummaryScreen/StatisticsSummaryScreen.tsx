import { StyleSheet, View } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';
import StatisticsSummaryCard from '@/components/design-system/StatisticsSummaryCard/StatisticsSummaryCard';

export default function StatisticsSummaryScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <Badge status="Connecté" />
            </View>
            <View style={styles.cardContainer}>
                <StatisticsSummaryCard />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        flex: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    statusContainer: {
        alignItems: 'flex-end',
        flex: 1,
    },
});
