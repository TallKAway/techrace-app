import { StyleSheet, View } from 'react-native';

import { useGetRaces } from '@/api/ressources/races/races';

export default function HomeScreen() {
    const { data } = useGetRaces();

    console.log(data);

    return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
