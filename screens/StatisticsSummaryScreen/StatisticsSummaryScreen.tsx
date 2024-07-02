import { useNavigation } from '@react-navigation/native';

import { Button, StyleSheet, View } from 'react-native';

import { ScreenStackBottomNavigatorProps } from '../../app/domains/navigation';

import { useGetRaces } from '@/api/ressources/races/races';
import Badge from '@/components/design-system/Badge/Badge';

export default function StatisticsSummaryScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    const navigation = useNavigation<ScreenStackBottomNavigatorProps>();

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <Badge status="Connecté" />
            </View>
            <View style={styles.cardContainer}>
                <Button
                    title="Go to Summary"
                    onPress={
                        // TODO : Ajouter ici la navigation vers la page de Car Race Détails
                        () => navigation.navigate('CarRaceStatisticDetails')
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'flex-end',
        flex: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    statusContainer: {
        alignItems: 'flex-end',
        flex: 1,
        paddingTop: 20,
    },
});
