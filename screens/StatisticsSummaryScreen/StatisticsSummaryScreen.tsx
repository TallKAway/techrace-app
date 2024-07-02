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
            <Badge status="Connecté" />
            <Badge status="Déconnecté" />
            <Button
                title="Go to Summary"
                onPress={
                    // TODO : Ajouter ici la navigation vers la page de Car Race Détails
                    () => navigation.navigate('CarRaceStatisticDetails')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
