import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ScreenStackBottomNavigatorProps } from '../domains/navigation';

import { useGetRaces } from '@/api/ressources/races/races';

export default function HomeScreen() {
    // TODO : Fetch data from the API, this is an example of how to use the useGetRaces hook
    const { data } = useGetRaces();
    console.log(data);

    const navigation = useNavigation<ScreenStackBottomNavigatorProps>();

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={
                    // Ajouter ici la navigation vers la page de Car Race Détails
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
